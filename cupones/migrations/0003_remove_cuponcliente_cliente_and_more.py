# Generated by Django 5.1.2 on 2024-10-18 18:43

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cupones", "0002_cupon_titulo"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name="cuponcliente",
            name="cliente",
        ),
        migrations.RemoveField(
            model_name="cuponcliente",
            name="cupon",
        ),
        migrations.RemoveField(
            model_name="usuario",
            name="apellido",
        ),
        migrations.RemoveField(
            model_name="usuario",
            name="fecha_nacimiento",
        ),
        migrations.RemoveField(
            model_name="usuario",
            name="nombre",
        ),
        migrations.AddField(
            model_name="cupon",
            name="categoria",
            field=models.CharField(
                choices=[
                    ("PROD", "Producto"),
                    ("MODA", "Moda"),
                    ("SERV", "Servicio"),
                    ("GAST", "Gastronomía"),
                    ("ENTR", "Entretenimiento"),
                    ("ELEC", "Electronica"),
                ],
                default="PROD",
                max_length=4,
            ),
        ),
        migrations.AddField(
            model_name="cupon",
            name="empresa",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="usuario",
            name="tipo",
            field=models.CharField(
                choices=[("CL", "Cliente"), ("EM", "Empresa")],
                default="CL",
                max_length=2,
            ),
        ),
        migrations.AddField(
            model_name="usuario",
            name="usuario",
            field=models.OneToOneField(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.CreateModel(
            name="CuponFormulario",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("titulo", models.CharField(max_length=20)),
                ("descripcion", models.TextField()),
                ("descuento", models.DecimalField(decimal_places=2, max_digits=5)),
                ("nombreEmpresa", models.CharField(max_length=20)),
                ("fecha_expiracion", models.DateField(blank=True)),
                (
                    "usuario",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="cupones.usuario",
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="Cliente",
        ),
        migrations.DeleteModel(
            name="CuponCliente",
        ),
    ]
