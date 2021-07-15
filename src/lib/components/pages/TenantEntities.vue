<template>
  <TenantHome title="Entities" :breadcrumb-links="breadcrumbLinks" :errors="errors">
    <template #header-right>
      <router-link :to="`/tenants/${clientId}/entities/new`" v-slot="{href, navigate}" tag="">
        <b-button variant="primary" @click="navigate">Create New Entity</b-button>
      </router-link>
    </template>
    <table-overlay-info :rows="5" :columns="1" :data="rootEntities">
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>Entity ID</b-th>
            <b-th>Name</b-th>
            <b-th>Type</b-th>
            <b-th>Description</b-th>
            <b-th>Created</b-th>
            <b-th>Last Updated</b-th>
          </b-tr>
        </b-thead>
        <template v-for="(entity, entityIndex) in rootEntities">
          <entity-table-body v-on:refresh-data="refreshData" :key="entity.entityId" :entity="entity" :entityIndex="entityIndex" :allEntities="allEntities"></entity-table-body>
        </template>
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
import EntityTableBody from "../block/entity-view/entity-table-body";

export default {
  name: "TenantEntities",
  store: store,
  components: {TableOverlayInfo, TenantHome, EntityTableBody},
  data() {
    return {
      processingDelete: {},
      expandEntities: {},
      errors: []
    }
  },
  computed: {
    clientId() {
      console.log("this.$route.params : ", this.$route.params);
      return this.$route.params.clientId;
    },
    allEntities() {
      return this.$store.getters["entity/getEntities"]({clientId: this.clientId, ownerId: this.currentUsername});
    },
    rootEntities() {
      return this.allEntities==undefined?this.allEntities:this.allEntities.filter((entity)=>{return !entity.parentId;});
    },
    breadcrumbLinks() {
      return [{to: `/tenants/${this.clientId}/entities`, name: "Entities"}];
    },
    currentUsername() {
      return this.$store.getters["auth/currentUsername"];
    }
  },
  methods: {
    refreshData() {
      this.$store.dispatch("entity/fetchEntities", {clientId: this.clientId, ownerId: this.currentUsername});
    }
  },
  mounted() {
    this.refreshData();
  }
}
</script>

<style scoped>

</style>