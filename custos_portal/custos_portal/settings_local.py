"""
Override default Django settings for a particular instance.

Copy this file to settings_local.py and modify as appropriate. This file will
be imported into settings.py last of all so settings in this file override any
defaults specified in settings.py.
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

KEYCLOAK_VERIFY_SSL = False

SESSION_COOKIE_SECURE = False

# Default email backend (for local development)
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Django - Email settings
# Uncomment and specify the following for sending emails (default email backend
# just prints to the console)
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = '...'
# EMAIL_PORT = '...'
# EMAIL_HOST_USER = '...'
# EMAIL_HOST_PASSWORD = '...'
# EMAIL_USE_TLS = True
ADMINS = [('Admin Name', 'admin@example.com')]
# SERVER_EMAIL = 'portal@example.com'


# Portal settings
PORTAL_TITLE = 'Custos Admin Portal'
GATEWAY_ID = 'Custos Portal'
