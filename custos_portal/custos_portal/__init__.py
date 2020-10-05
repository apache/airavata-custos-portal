from custos.clients.identity_management_client import IdentityManagementClient
from custos.clients.user_management_client import UserManagementClient
from custos.transport.settings import CustosServerClientSettings
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
settings = os.path.join(BASE_DIR, 'transport', 'settings.ini')

custos_settings = CustosServerClientSettings(custos_host='custos.scigap.org',
                                             custos_port='31499',
                                             custos_client_id='custos-6nwoqodstpe5mvcq09lh-10000101',
                                             custos_client_sec='GiKrGGVLW7zDoPZwzgCiFM7WUz3PhIumTmFxAkr7',
                                             configuration_file_location=None)

identity_management_client = IdentityManagementClient(custos_settings)
user_management_client = UserManagementClient(custos_settings)