from django.db import models
from django.contrib.auth.models import User

class Cupon(models.Model):
    class Categoria(models.TextChoices):
        PRODUCTO = 'PROD', 'Producto'
        MODA = 'MODA', 'Moda'
        SERVICIO = 'SERV', 'Servicio'
        GASTRONOMIA = 'GAST', 'Gastronomía'
        ENTRETENIMIENTO = 'ENTR', 'Entretenimiento'
        ELECTRONICA = 'ELEC', 'Electronica'
    codigo = models.CharField(max_length=10, unique=True)
    titulo = models.CharField(max_length=20)
    descripcion = models.TextField()
    descuento = models.DecimalField(max_digits=5, decimal_places=2)
    empresa = models.CharField(max_length=20, blank=True)
    categoria = models.CharField(max_length=4, choices=Categoria.choices, default=Categoria.PRODUCTO)
    fecha_expiracion = models.DateField(blank=True)
    es_activo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo

class Usuario(models.Model):
    class Tipo(models.TextChoices):
        CLIENTE = 'CL', 'Cliente'
        EMPRESA = 'EM', 'Empresa'
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, null=True) #Cambiar en migraciones proximas
    tipo = models.CharField(max_length=2, choices=Tipo.choices, default=Tipo.CLIENTE)

    def __str__(self):
        return self.usuario.username

class CuponUsuario(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    cupon = models.ForeignKey(Cupon, on_delete=models.CASCADE)
    fecha_obtenido = models.DateTimeField(auto_now_add=True)
    usado = models.BooleanField(default=False)

class CuponFormulario(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=20)
    descripcion = models.TextField()
    descuento = models.DecimalField(max_digits=5, decimal_places=2)
    nombreEmpresa = models.CharField(max_length=20)
    fecha_expiracion = models.DateField(blank=True)