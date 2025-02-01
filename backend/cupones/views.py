from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from .models import Cupon, Usuario
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .serializer import CuponSerializer, UsuarioSerializer
from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework.views import APIView

# Con esta clase creo el CRUD de Cupon
class CuponView(viewsets.ModelViewSet):
    serializer_class = CuponSerializer
    queryset = Cupon.objects.all()

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    tipo = request.data.get('tipo')

    if tipo not in [Usuario.Tipo.CLIENTE, Usuario.Tipo.EMPRESA]:
        return Response({"error": "Tipo de usuario no válido"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password)
    usuario = Usuario.objects.create(usuario=user, tipo=tipo)

    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny]) 
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            try:  
                usuario = Usuario.objects.get(usuario=user)
            except Usuario.DoesNotExist:
                return Response({"error": "Usuario profile not found"}, status=status.HTTP_404_NOT_FOUND)
        if (usuario):
            user_type = usuario.tipo    
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_type': user_type
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
