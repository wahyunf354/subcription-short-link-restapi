# Short Link API

## Create Short Link

Endpoint: POST /api/v1/links

Header:

- Authentication: token

Request:

```json
{
  "destination": "http://google.com",
  "title": "Google Link", // optional
  "short_link": "wnf.icu/GOOGLE"
}
```

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "destination": "http://google.com",
    "title": "Google Link", // optional
    "short_link": "wnf.icu/GOOGLE",
    "user_id": 1
  }
}
```

Response (Error)

```json
{
  "code": 400,
  "status": "error",
  "data": {
    "message": "Request Invalid"
  }
}
```

## Update Short Link

Endpoint: PUT /api/v1/links/:linkId

Header:

- Authentication: token

Request:

```json
{
  "destination": "http://google.com",
  "title": "Google Link", // optional
  "short_link": "wnf.icu/GOOGLE"
}
```

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "destination": "http://google.com",
    "title": "Google Link", // optional
    "short_link": "wnf.icu/GOOGLE",
    "user_id": 1
  }
}
```

Response (Error)

```json
{
  "code": 400,
  "status": "error",
  "data": {
    "message": "Request Invalid"
  }
}
```

## Get Short Link

Endpoint: GET /api/v1/links/:linkId

Header:

- Authentication: token

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "destination": "http://google.com",
    "title": "Google Link", // optional
    "short_link": "wnf.icu/GOOGLE",
    "user_id": 1
  }
}
```

Response (Error)

```json
{
  "code": 400,
  "status": "error",
  "data": {
    "message": "Link not found"
  }
}
```

## Search Short Link

Endpoint: GET /api/v1/links

Param:

- title: "",
- destination: "",
- short_link: ""

Header:

- Authentication: token

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "destination": "http://google.com",
      "title": "Google Link", // optional
      "short_link": "wnf.icu/GOOGLE",
      "user_id": 1
    },
    {
      "id": 1,
      "destination": "http://google.com",
      "title": "Google Link", // optional
      "short_link": "wnf.icu/GOOGLE",
      "user_id": 1
    }
  ]
}
```

## Remove Short Link

Endpoint: DELETE /api/v1/links/:linkId

Header:

- Authentication: token

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": true
}
```

Response (Error)

```json
{
  "code": 400,
  "status": "error",
  "data": {
    "message": "Link not found"
  }
}
```
