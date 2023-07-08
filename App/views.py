from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *



@api_view(['GET'])
def home(request):
    video_obj = Video.objects.all()
    serializer = VideoSerializer(video_obj, many=True)
    return Response({'status': 200, "message": 'hello', 'payload': serializer.data})
# Create your views here.
