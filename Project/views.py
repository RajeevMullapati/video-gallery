from django.http import HttpResponse


def video(request):
    return HttpResponse('VIDEO-GALLERY')