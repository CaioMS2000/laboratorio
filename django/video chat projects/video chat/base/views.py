from django.shortcuts import render
from django.http import JsonResponse
from agora_token_builder import RtcTokenBuilder
from django.views.decorators.csrf import csrf_exempt
import random, time, json

from .models import RoomMember

# Create your views here.

def getToken(request):
    appId = "8dd6a3ad450348529810a670823dc695"
    appCertificate = "4a6e4303144d423cae00cf12d6b590fe"
    channelName = request.GET.get('channel')
    uid = random.randint(1, 230)
    expirationTimeInSeconds = 3600 * 24
    currentTimeStamp = int(time.time())
    privilegeExpiredTs = currentTimeStamp + expirationTimeInSeconds
    role = 1

    token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs)

    return JsonResponse({'token':token, 'uid':uid}, safe=False)

def lobby(request):
    return render(request, 'base/lobby.html')

def room(request):
    return render(request, 'base/room.html')

@csrf_exempt
def createMember(request):
    data = json.loads(request.body)
    member, created = RoomMember.objects.get_or_create( name= data['name'], uid= data['UID'], room_name= data['room_name'])

    return JsonResponse({'name': data['name']}, safe= False)

def getMember(request):
    uid = request.GET.get('UID')
    room_name = request.GET.get('room_name')

    member = RoomMember.objects.get(uid= uid, room_name= room_name)

    name = member.name

    return JsonResponse({'name': member.name}, safe= False)

@csrf_exempt
def deleteMember(request):
    data = json.loads(request.body)
    name = data['name']
    member = RoomMember.objects.get(name= name, uid= data['UID'], room_name= data['room_name'])

    member.delete()

    return JsonResponse(f'{name} deleted !', safe= False)