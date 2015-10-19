# Create your views here.
from django.shortcuts import render
from .forms import RegistrationForm


def sheep(request):
    return render(request, "home.html", {})

def form_test(request):
    if request.method == 'GET':
        form = RegistrationForm() 
        return render(request, 'form_test.html', { 'form' : form })
    else:
        form = RegistrationForm(request.POST)
        print(request.POST)
        return render(request, 'home.html')
