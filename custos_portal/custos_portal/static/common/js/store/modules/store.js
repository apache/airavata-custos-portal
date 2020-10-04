import axios from 'axios';

export const state = {
    tenant: {
        tenant_id: '',
        tenant_status: '',
        admin_email: '',
        admin_first_name: '',
        admin_last_name: '',
        admin_password: '',
        admin_username: '',
        application_type: '',
        client_id: '',
        client_name: '',
        client_uri: '',
        comment: '',
        contacts: '',
        domain: '',
        logo_url: '',
        parent_tenant_id: '',
        redirect_uris: '',
        scope: ''
    }
};

export const getters = {
    getTenant = (state) => state.tenant
};

export const actions = {};

export const mutations = {};