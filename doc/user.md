# API USER

## Register User

Enpoint: POST /api/v1/users

Request

```json
{
  "first_name": "Wahyu",
  "last_name": "Nur Fadillah",
  "email": "wahyu@gmail.com",
  "password": "rahasia",
  "role": "admin"
}
```

Response (Success)

```json
{
  "code": 200,
  "success": "success",
  "data": {
    "id": 1,
    "first_name": "Wahyu",
    "last_name": "Nur Fadillah",
    "email": "wahyu@gmail.com",
    "password": "rahasia",
    "role": "admin",
    "created_at": "datetime",
    "updated_at": "datetime"
  }
}
```

Response (Error Request Invalid)

```json
{
  "code": 400,
  "success": "error",
  "data": {
    "message": "Request invalid"
  }
}
```

## Login User

Enpoint: POST /api/v1/login

Request

```json
{
  "email": "wahyu@gmail.com",
  "password": "rahasia"
}
```

Response (Success)

```json
{
  "code": 200,
  "success": "success",
  "data": {
    "id": 1,
    "first_name": "Wahyu",
    "last_name": "Nur Fadillah",
    "email": "wahyu@gmail.com",
    "password": "rahasia",
    "role": "admin",
    "created_at": "datetime",
    "updated_at": "datetime",
    "token": "uuid"
  }
}
```

Response (Error Request Invalid)

```json
{
  "code": 400,
  "success": "error",
  "data": {
    "message": "Email or Password invalid"
  }
}
```

## Get User

Enpoint: POST /api/v1/users/current

Header:

- Authentication: token

Response (Success)

```json
{
  "code": 200,
  "success": "success",
  "data": {
    "id": 1,
    "first_name": "Wahyu",
    "last_name": "Nur Fadillah",
    "email": "wahyu@gmail.com",
    "password": "rahasia",
    "role": "admin",
    "created_at": "datetime",
    "updated_at": "datetime",
    "token": "uuid"
  }
}
```

Response (Error Unauthentication)

```json
{
  "code": 401,
  "success": "error",
  "data": {
    "message": "Unauthentication"
  }
}
```

## Update User

Enpoint: POST /api/v1/users/current

Header:

- Authentication: token

Request

```json
{
  "first_name": "Wahyu Updated",
  "last_name": "Nur Fadillah Updated",
  "email": "wahyuUpdated@gmail.com",
  "password": "rahasia"
}
```

Response (Success)

```json
{
  "code": 200,
  "success": "success",
  "data": {
    "id": 1,
    "first_name": "Wahyu Updated",
    "last_name": "Nur Fadillah Updated",
    "email": "wahyuUpdated@gmail.com",
    "password": "rahasia",
    "role": "admin",
    "created_at": "datetime",
    "updated_at": "datetime"
  }
}
```

Response (Error Request Invalid)

```json
{
  "code": 400,
  "success": "error",
  "data": {
    "message": "Request invalid"
  }
}
```
