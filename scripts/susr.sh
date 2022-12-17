#!/usr/bin/expect -f

set timeout -1

spawn python manage.py createsuperuser

expect "Username: "

send -- "super\r"

expect "Email address: "

send -- "\r"

expect "Password: "

send -- "qq11qq11\r"

expect "Password (again): "

send -- "qq11qq11\r"

expect eof
