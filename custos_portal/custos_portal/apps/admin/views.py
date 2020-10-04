from django.shortcuts import render
from custos_portal import identity_management_client
from django.conf import settings

def request_new_tenant(request):
    if request.method == 'POST':
        logger.debug("Form is posted")
    request.active_nav_item = 'admin-request-new-tenant'
    token = request.COOKIES['token']

    return render(request, 'workspace/request_new_tenant.html', {
        'bundle_name': 'admin-request-new-tenant',
        'data': token
    })

def list_new_tenant_requests(request):
    request.active_nav_item = 'list-requests'
    
    # TODO fetch all the tenant requests from airavata here.
    token = request.COOKIES['token']
    return render(request, 'workspace/list_requests.html', {
        'bundle_name': 'admin-list-requests',
        'data': token
    })


def view_tenant_request(request, client_id):
    print("Admin view Tenant request Id: {}".format(client_id))
    token = request.COOKIES['token']

    return render(request, 'workspace/view_tenant_request.html', {
        'bundle_name': 'admin-view-request',
        'tenant_client_id': client_id,
        'data': token
    })


def edit_tenant_request(request, client_id):
    print("Edit Tenant request Id: {}".format(client_id))
    token = request.COOKIES['token']

    return render(request, 'workspace/view_tenant_request.html', {
        'bundle_name': 'admin-edit-request',
        'tenant_client_id': client_id,
        'data': token
    })