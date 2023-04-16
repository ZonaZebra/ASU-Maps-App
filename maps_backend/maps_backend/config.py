import os

# Create a variable called DJANGO_SECRET_KEY and set it to the value of the environment variable DJANGO_SECRET_KEY
DJANGO_SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
