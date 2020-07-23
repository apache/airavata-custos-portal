from django.shortcuts import render
from custos_portal import identity_management_client
from django.conf import settings

def list_new_tenant_requests(request):
    request.active_nav_item = 'list-requests'
    # response = identity_management_client.authenticate(settings.CUSTOS_TOKEN, username, password)
    # token = MessageToDict(response)["accessToken"]
    # console.log("Token is", token)
    # TODO fetch all the tenant requests from airavata here.
    
    token = request.COOKIES['token']
    return render(request, 'workspace/list_requests.html', {
        'bundle_name': 'admin-list-requests',
        'data': token
    })


def view_tenant_request(request, tenant_request_id):
    print("Admin view Tenant request Id: {}".format(tenant_request_id))
    token = request.COOKIES['token']

    return render(request, 'workspace/view_tenant_request.html', {
        'bundle_name': 'admin-view-request',
        'tenant_request_id': tenant_request_id,
        'data': token
    })


def edit_tenant_request(request, tenant_request_id):
    print("Edit Tenant request Id: {}".format(tenant_request_id))
    token = request.COOKIES['token']

    return render(request, 'workspace/view_tenant_request.html', {
        'bundle_name': 'admin-edit-request',
        'tenant_request_id': tenant_request_id,
        'data': token
    })