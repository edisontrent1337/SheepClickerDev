# SheepClicker

This should one day develop, to be a full fledged WebApplication that will
seem to be a lot like CookieClicker.

## Requirements
So far you'll only need to have Python3.x and Django installed.
Preferrably you'll want to install virtualenv and pip as well if you haven't
done so yet.

## Installation
### Linux
#### Django Server
After installing virtualenv and pip, head into this project repository. Create a
virtual environment by running

>`user@host:~/.../SheepClickerDev$ virtualenv venv`

where venv is the name of your virtual environment. Now that you have created your own
virtual environment, activate it by running

>`user@host:~/.../SheepClickerDev$ source /venv/bin/activate`

again 'venv' being the name of your virtual environment. If everything worked,
your command line should look something like this:

>`(venv)user@host:~/.../SheepClickerDev$ virtualenv venv`


Now you can download and install the django server by running

>`(venv)user@host:~/.../SheepClickerDev$ pip install django`

You should see the latest version of django being listed in

>`(venv)user@host:~/.../SheepClickerDev$ pip freeze`

You have successfully installed the Django server. For more information, see
the [Django Quick Installation Guide](https://docs.djangoproject.com/en/1.8/intro/install/)

#### Game
Now all that is left for you to do, is running the server. If you run SheepClicker
for the first time, you need to migrate the models to your local database. Do

>`(venv)user@host:~/.../SheepClickerDev$ python manage.py migrate`

In case you run into an encoding error

>`SyntaxError: Non-ASCII character '\xc2' in file /home/amdin/Development/DjangoBlog/SheepClickerDev/SheepClicker/settings.py on line 23, but no encoding declared; see http://www.python.org/peps/pep-0263.html for details`

You need to add the following line of code at the first line of your settings.py
and then rerun the last command.

>`# coding=utf-8`

Now everything is set up and you can go ahead and run the SheepClicker project

>`(venv)user@host:~/.../SheepClickerDev$ python manage.py runserver`

If everything went right, the server is now running and you can pointer your
browser to <http://localhost:8000/sheep> to play your first round of sheepclicker.
