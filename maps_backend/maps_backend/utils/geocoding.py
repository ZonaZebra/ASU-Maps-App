from geopy.geocoders import Nominatim

def geocode(location):
    geolocator = Nominatim(user_agent='myapp')
    location = geolocator.geocode(location)
    return location.latitude, location.longitude
