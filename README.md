<a name="readme-top"></a>

# Parrhesia (a chat app)

Parrhesia is a web application that enables group chat between users on several channels.

Users can sign up for an account, log in, create channels, chat in channels, 
invite users to channels, and accept or reject other users' invitations to channels.


## Installation

### Get The Project

Clone the project

```bash
  git clone https://github.com/yousafesaeed/chat-app.git
```

Go to the project directory

```bash
  cd chat-app
```

### Run Locally

#### Vanilla

Make migrations

```bash
  python manage.py makemigrations parrhesia
```

Migrate

```bash
  python manage.py migrate
```

Create super user

```bash
  python manage.py createsuperuser
```

Start the server

```bash
  python manage.py runserver
```

#### Scripted

Execute file as program

```bash
  chmod +x tasks.sh
```

Make migrations and migrate

```bash
  ./tasks.sh m
```

Create super user

```bash
  ./tasks.sh c
```

Run server

```bash
  ./tasks.sh r
```

##### Other Scripts

Drop Datebase

```bash
  ./tasks.sh d
```

Convert SCSS to CSS

```bash
  ./tasks.sh s
```


## Application Structure

There is a front-end and a back-end to this application.
Django templates, HTML, SCSS, CSS, and Javascript were used to create the front end.
Python and Django are used to create the back end.
The front-end communicates with the back-end via a JavaScript API.
The application makes use of a SQLite3 database.


## Directory Structure

- `parrhesia` - main application directory.
    - `static/parrhesia` contains all static content.
        - `images` - contains favicon and logo of the application
        - `css` - contains compiled CSS file and its map.
        - `js` - all JavaScript files used in project.
            - `channel.js` - contacts API to add and read messages in a channel.
            - `channels.js` - contacts API to list out all the channels.
            - `invite.js` - contacts API to invite users to channels.
            - `invites.js` - contacts API to list out all invites, and also accepts and rejects invites.
        - `scss` - source SCSS files.
    - `templates/parrhesia` contains all application templates.
        - `layout.html` - layout for all templates.
        - `index.html` - landing page.
        - `error.html` - 401 error page.
        - `404.html` - 404 error page.
        - `login.html` - login page.
        - `register.html` - registering page.
        - `channel.html` - channel page, where users can chat.
        - `channels.html` - channels page, contains all channels and where users can create new channels.
        - `invite.html` - invite page, where users can invite other users to channels.
        - `invites.html` - invites page, list out all invites, and also accept and reject invites.
    - `views.py` - API and application views.
    - `models.py` - database structure.
    - `admin.py` - register application models to admin.
    - `urls.py` - register all application paths.
- `chat` - project directory.
- `scripts` - this directory contains one script `susr.sh` that is used by `tasks.sh`.
- `tasks.sh` - some common scripts.
- `manage.py` - django's command-line utility for administrative tasks.


## Tech Stack

### Back-end

* [![Django][django.shield]][django-url]
* [![Python][py.shield]][py-url]
* [![SQLite][sqlite.shield]][sqlite-url]

### Front-end

* [![JavaScript][js.shield]][js-url]
* [![HTML][html.shield]][html-url]
* [![SASS][sass.shield]][sass-url]
* [![CSS][css.shield]][css-url]


<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

[django.shield]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white
[django-url]: https://www.djangoproject.com/

[py.shield]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[py-url]: https://www.python.org/

[sqlite.shield]: https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
[sqlite-url]: https://www.sqlite.org/

[js.shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://www.javascript.com/

[html.shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://www.html.com

[sass.shield]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/

[css.shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://www.w3.org/Style/CSS/
