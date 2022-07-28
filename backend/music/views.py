
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import MusicSerializer
from .models import Music



@api_view(['GET'])
def music_list(request) :

    music = Music.objects.all()
    serializer = MusicSerializer(music, many = True)

    #return Response('ok')
    return Response(serializer.data)
