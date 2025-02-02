from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _  # Import for translations
from django.db.models.signals import post_save
from django.dispatch import receiver

class CustomUser(AbstractUser):
    email = models.EmailField(
        _('email address'),
        unique=True,
        error_messages={
            'unique': _("A user with that email already exists."),
        }
    )

    username = models.CharField(
        _('username'),
        max_length=150,
        unique=False,
        blank=True,
        null=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
    
class Profile(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name='profile'
    )

    full_name = models.CharField(max_length=100)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to='profile_pics/', default='default.jpg')
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name

# Signals to automatically create and save Profile instances when a CustomUser is created/updated.
@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, full_name=instance.username or instance.email)

@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
