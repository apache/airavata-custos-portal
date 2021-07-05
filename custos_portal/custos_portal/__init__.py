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
custos_settings = CustosServerClientSettings(custos_host='custos host',
                                             custos_port='custos port',
                                             custos_client_id='custos client id',
                                             custos_client_sec='custos client secret',
                                             configuration_file_location=None)

identity_management_client = IdentityManagementClient(custos_settings)
user_management_client = UserManagementClient(custos_settings)