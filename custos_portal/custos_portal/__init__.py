from custos.clients.identity_management_client import IdentityManagementClient
from custos.clients.user_management_client import UserManagementClient
from custos.transport.settings import CustosServerClientSettings
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
settings = os.path.join(BASE_DIR, 'transport', 'settings.ini')

custos_settings = CustosServerClientSettings(custos_host=custos_host,
                                             custos_port=custos_port,
                                             custos_client_id=custos_client_id,
                                             custos_client_sec=custos_client_sec,
                                             configuration_file_location=None)

identity_management_client = IdentityManagementClient(custos_settings)
user_management_client = UserManagementClient(custos_settings)