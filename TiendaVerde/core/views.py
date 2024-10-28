from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import logout
from .models import *
from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, "index.html")

def carrito(request):
    return render(request, "carrito.html")

def store(request):
    return render(request, "store.html")

@login_required
def recicle(request):
    return render(request, "recicle.html")

def index(request):
    return render(request, "index.html")

def login2(request):
    return render(request, "registration/login2.html")

def login(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleanned_data['username']
            messages.success(request, f'usuario {username} creado')
    else:
        form = UserCreationForm()

    context = {'form' : form}
    return render(request, 'registration/login.html', context)

def exit(request):
    logout(request)
    return redirect('home')
