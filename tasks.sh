#!/bin/bash

chmod +x scripts/susr.sh

if [[ $1 == "c" ]]; then
    ./scripts/susr.sh
elif [[ $1 == "d" ]]; then
    rm db.sqlite3 && find parrhesia/migrations/ ! -name '__init__.py' -type f -exec rm -f {} +
elif [[ $1 == "m" ]]; then
    python manage.py makemigrations parrhesia && python manage.py migrate
elif [[ $1 == "r" ]]; then
    python manage.py runserver
else
    echo -e 'Usage:
"$ tasks.sh c": Create a super user "username: super, pw: qq11qq11"
"$ tasks.sh d": Delete the database,
"$ tasks.sh m": Make & migrate the database
"$ tasks.sh r": Run the server'
    exit 1
fi
