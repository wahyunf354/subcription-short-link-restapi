# API PLAN SUBCRIPTION

## Create Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions

Header:

- Authentication: token

Request:

```json
{
  "title": "Core",
  "price_per_month": "20000", // IDR
  "short_link": 100
}
```

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "title": "Core",
    "price_per_month": "20000", // IDR
    "short_link": 100
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

## Update Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions/:planSubcriptionId

Header:

- Authentication: token

Request:

```json
{
  "title": "Core",
  "price_per_month": "20000", // IDR
  "short_link": 100
}
```

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "title": "Core",
    "price_per_month": "20000", // IDR
    "short_link": 100
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

## Get Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions/:planSubcriptionId

Header:

- Authentication: token

Response (Success)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "title": "Core",
    "price_per_month": "20000", // IDR
    "short_link": 100
  }
}
```

Response (Error)

```json
{
  "code": 400,
  "status": "error",
  "data": {
    "message": "Plan Subcription Not Found"
  }
}
```

## List Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions

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
      "title": "Core",
      "price_per_month": "20000", // IDR
      "short_link": 100
    },
    {
      "id": 2,
      "title": "Growth",
      "price_per_month": "40000", // IDR
      "short_link": 200
    }
  ]
}
```

## Remove Plan Subcription

Endpoint: DELETE /api/v1/plan-subcriptions/:planSubcriptionId

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
    "message": "Plan Subcription Not Found"
  }
}
```

## Add User To Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions/add

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

## Remove User From Plan Subcription

Endpoint: POST /api/v1/plan-subcriptions/remove

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
