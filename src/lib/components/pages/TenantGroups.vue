<template>
  <TenantHome title="Groups" :breadcrumb-links="breadcrumbLinks" :errors="errors">
    <template #header-right>
      <router-link :to="`/tenants/${clientId}/groups/new`" v-slot="{href, navigate}" tag="">
        <b-button variant="primary" @click="navigate">Create New Group</b-button>
      </router-link>
    </template>
    <table-overlay-info :rows="5" :columns="1" :data="groups">
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>Group ID</b-th>
            <b-th>Name</b-th>
            <b-th>Description</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="group in groups" :key="group.groupId">
            <b-td>
              <router-link :to="`/tenants/${clientId}/groups/${group.groupId}`" v-slot="{href, navigate}">
                <b-link :href="href" v-on:click="navigate">{{ group.groupId }}</b-link>
              </router-link>
              <button-copy :value="group.groupId"/>
            </b-td>
            <b-td>
              {{ group.name }}
            </b-td>
            <b-td>{{ group.description }}</b-td>
            <b-td>
              <button-overlay :show="processingDelete[group.groupId]">
                <b-button variant="link" v-on:click="onDeleteClick(group)" v-b-tooltip.hover title="Delete">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </button-overlay>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

      <!--    <b-pagination-->
      <!--        size="sm"-->
      <!--        class="float-right"-->
      <!--        v-model="activePage"-->
      <!--        :total-rows="tenantsPagination.totalRows"-->
      <!--        :per-page="tenantsPagination.perPage"-->
      <!--        aria-controls="my-table"-->
      <!--        :value="activePage"-->
      <!--    ></b-pagination>-->
    </table-overlay-info>
  </TenantHome>
</template>

<script>
import store from "../../store"
import TenantHome from "./TenantHome";
import TableOverlayInfo from "../overlay/table-overlay-info";
import ButtonOverlay from "../overlay/button-overlay";
import ButtonCopy from "../button/button-copy";

export default {
  name: "TenantGroups",
  store: store,
  components: {ButtonCopy, ButtonOverlay, TableOverlayInfo, TenantHome},
  data() {
    return {
      processingDelete: {},
      errors: []
    }
  },
  computed: {
    clientId() {
      console.log("this.$route.params : ", this.$route.params);
      return this.$route.params.clientId;
    },
    groups() {
      return this.$store.getters["group/getGroups"]({clientId: this.clientId})
    },
    breadcrumbLinks() {
      return [{to: `/tenants/${this.clientId}/groups`, name: "Groups"}];
    }
  },
  methods: {
    refreshData() {
      this.$store.dispatch("group/fetchGroups", {clientId: this.clientId});
    },
    async onDeleteClick({groupId, name}) {
      this.processingDelete = {...this.processingDelete, [groupId]: true};

      try {
        await this.$store.dispatch("group/deleteGroup", {
          clientId: this.clientId,
          groupId: groupId
        });
        this.refreshData();
      } catch (error) {
        this.errors.push({
          title: `Unknown error when deleting the group ${name}.`,
          source: error, variant: "danger"
        });
      }

      this.processingDelete = {...this.processingDelete, [groupId]: false};
    }
  },
  mounted() {
    this.refreshData();
  }
}
</script>

<style scoped>

</style>