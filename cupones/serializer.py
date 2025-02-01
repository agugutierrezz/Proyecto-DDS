from rest_framework import serializers
from .models import Cupon, Usuario

class CuponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cupon
        fields = ('id','codigo','titulo','descripcion', 'descuento', 'fecha_expiracion') #Posteriormente, cambiar a '__all__' con el front pidiendo todos los datos 

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'username', 'email', 'password', 'tipo')

    def create(self, validated_data):
        user = Usuario(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user