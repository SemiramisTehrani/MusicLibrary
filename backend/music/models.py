from pyexpat import model
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Music(models.Model) :

    title            = models.CharField(max_length = 255)
    artist           = models.CharField(max_length = 255)
    album            = models.CharField(max_length = 255)
    release_date     = models.CharField(max_length = 255)
    genre            = models.CharField(max_length = 255)
    like_status      = models.DecimalField(max_digits = 8, decimal_places= 0)