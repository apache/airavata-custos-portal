# from custos.clients.identity_management_client import IdentityManagementClient
# from custos.clients.user_management_client import UserManagementClient
# from custos.transport.settings import CustosServerClientSettings

# custos_settings = CustosServerClientSettings(configuration_file_location='.\custos_portal\settings.ini')
# identity_management_client = IdentityManagementClient(custos_settings)
# user_management_client = UserManagementClient(custos_settings)
# settings = CustosServerClientSettings(configuration_file_location='.\custos_portal\settings.ini')

from custos.clients.identity_management_client import IdentityManagementClient
from custos.clients.user_management_client import UserManagementClient
from custos.transport.settings import CustosServerClientSettings
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
settings = os.path.join(BASE_DIR, 'transport', 'settings.ini')
# print('****settings',settings)
custos_settings = CustosServerClientSettings(custos_host=CUSTOS_HOST,
                                             custos_port=CUSTOS_PORT,
                                             custos_client_id=CUSTOS_CLIENT_ID,
                                             custos_client_sec=CUSTOS_CLIENT_SEC,
                                             configuration_file_location=None)

identity_management_client = IdentityManagementClient(custos_settings)
user_management_client = UserManagementClient(custos_settings)