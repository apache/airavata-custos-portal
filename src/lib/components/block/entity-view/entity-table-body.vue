<template>
<b-tbody>
  <b-tr>
    <!-- column One -->
    <b-td>
      <template>
        <b-button variant="link" size="sm" v-on:click="onClickExpand()" v-b-tooltip.hover :title="expandChild?'Colapse':'Expand'">
          <b-icon :icon="expandChild?'chevron-up':'chevron-down'"></b-icon>
        </b-button>
      </template>
      <router-link :to="`/tenants/${clientId}/entities/${entity.entityId}`" v-slot="{href, navigate}">
        <b-link :href="href" v-on:click="navigate">{{ entity.entityId }}</b-link>
      </router-link>
      <button-copy :value="entity.entityId"/>
    </b-td>
    <!-- Column Two -->
    <b-td>{{ entity.name }}</b-td>
    <!-- Column Three -->
    <b-td>{{ entity.type }}</b-td>
    <!-- Column Four -->
    <b-td>{{ entity.description }}</b-td>
    <!-- Column Five -->
    <b-td>{{ entity.createdAt }}</b-td>
    <!-- Column Six -->
    <b-td>{{ entity.updatedAt }}</b-td>
    <!-- Column Seven -->
    <b-td>
      <!-- Create Child Entity Button -->
      <router-link :to="{name:'create_entity', params:{ clientId: `${clientId}`, entityId:`${entity.entityId}`}}" v-slot="{href, navigate}" tag="">
        <b-button variant="link" size="sm" v-on:click="navigate" v-b-tooltip.hover title="Create Child Entity">
          <b-icon icon="folder-plus"></b-icon>
          <!-- <v-icon>mdi-pl?us</v-icon> -->
        </b-button>
      </router-link>
      <!-- Share Entity Button -->
      <b-button variant="link" size="sm" v-b-modal="`modal-select-users-or-groups-${entityIndex}`" v-b-tooltip.hover title="Share">
        <span>{{ entity.sharedCount }}</span>&nbsp;
        <b-icon icon="share"></b-icon>
      </b-button>
      <!-- Modal Share Entity -->
      <modal-share-entity 
        :client-id="clientId" :entity-id="entity.entityId"
        :modal-id="`modal-select-users-or-groups-${entityIndex}`"
        :title="`Share Entity '${entity.name}'`"
        v-on:close="refreshData"
      />
      <!-- Delete Entity Button -->
      <button-overlay :show="processingDelete[entity.entityId]">
        <b-button variant="link" size="sm" v-on:click="onClickDelete(entity)" v-b-tooltip.hover title="Delete">
          <b-icon icon="trash"></b-icon>
        </b-button>
      </button-overlay>
    </b-td>
  </b-tr>
  <!-- Child Entities -->
  <template v-if="expandChild">
    <b-tr><b-td colspan="100%">
      <template v-if="!childEntities || !childEntities.length" >
        No child entities to show.
      </template>
      <template v-else v-for="(childEntity, childEntityIndex) in childEntities">
        <entity-table-body v-on:refresh-data="refreshData" :key="childEntity.entityId" :entity="childEntity" :entityIndex="entityIndex.toString()+'-'+childEntityIndex.toString()" :allEntities="allEntities"></entity-table-body>
      </template>
    </b-td></b-tr>
  </template>
  
</b-tbody>
</template>

<script>
import store from "../../../store"
import ModalShareEntity from "../../modals/modal-share-entity";
import ButtonOverlay from "../../overlay/button-overlay";
import ButtonCopy from "../../button/button-copy";


export default {
  name: 'entity-table-body',
  store: store,
  components: {ButtonCopy, ButtonOverlay, ModalShareEntity},
  props: {
    entity: Object,
    entityIndex: [Number, String],
    allEntities: Array
  },
  data() {
    return {
      processingDelete: {},
      expandChild: false,
      errors: []
    }
  },
  computed: {
    clientId() {
      return this.$route.params.clientId;
    },
    childEntities() {
      return this.allEntities==undefined?this.allEntities:
        this.allEntities.filter((entity)=>{return entity.parentId==this.entity.entityId;});
    }
  },
  methods: {
    onClickExpand() {
      this.expandChild = !this.expandChild
    },
    refreshData() {
      this.$emit('refresh-data');
    },
    async onClickDelete({entityId, name, description, type, ownerId}) {
      this.processingDelete = {...this.processingDelete, [entityId]: true};

      try {
        await this.$store.dispatch("entity/deleteEntity", {
          clientId: this.clientId,
          entityId,
          name,
          description,
          type,
          ownerId
        });
        this.refreshData();
      } catch (error) {
        this.errors.push({
          title: `Unknown error when deleting the entity '${entityId}'.`,
          source: error, variant: "danger"
        });
      }

      this.processingDelete = {...this.processingDelete, [entityId]: false};
    }
  }
}
</script>

<style scoped>
.hidden_header{
  display: none;
}
</style>