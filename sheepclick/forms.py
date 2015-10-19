from django import forms
from django.forms.extras.widgets import SelectDateWidget

BIRTH_YEAR = ('1980', '1990', '2000')
BIRTH_MONTH = ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
               'Aug', 'Sep', 'Oct', 'Nov', 'Dec')

class LoginForm(forms.Form):
    username = forms.CharField(max_length=30, min_length=5)
    password = forms.CharField(min_length=8, max_length=50, widget=forms.PasswordInput())

class RegistrationForm(LoginForm):
    email = forms.EmailField()
    family_name = forms.CharField(max_length=50)
    first_name = forms.CharField(max_length=50)
    birth_date = forms.DateField()
