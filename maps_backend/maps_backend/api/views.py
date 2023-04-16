from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from utils.geocoding import geocode

@csrf_exempt
def geocode_view(request):
    if request.method == 'POST':
        location = request.POST.get('location')
        if location:
            try:
                lat, lng = geocode(location)
                data = {
                    'status': 'ok',
                    'lat': lat,
                    'lng': lng,
                }
            except Exception as e:
                data = {
                    'status': 'error',
                    'message': str(e),
                }
        else:
            data = {
                'status': 'error',
                'message': 'Missing location parameter',
            }
    else:
        data = {
            'status': 'error',
            'message': 'Invalid method',
        }
    return JsonResponse(data)
