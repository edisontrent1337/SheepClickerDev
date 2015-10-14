# Create your views here.
from django.shortcuts import render


def sheep(request):
    return render(request, "home.html", {})
