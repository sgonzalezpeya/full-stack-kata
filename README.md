# Full Stack Kata

- This project uses Node v12

## Starting the project

1. Install dependencies

```bash
npm install
```

2. Start the API

```bash
npm run start-be
```

3. Start the dev server

```bash
npm run start
```

4. Running the tests in watch mode

```bash
npm run test
```

# API Reference

#### Some considerations

- The API may fail anytime
- The API may take up to 3 seconds to respond

### [GET] /api/cars?p={pageNumber}

> Returns a paginated list of cars

```javascript
{
  currentPage: 1,
  data: [{...}, {...}],
  perPage: 100,
  total: 1000,
  totalPages: 10
}
```

### [GET] /api/cars/:carId

> Returns a car details

```javascript
{
  id:123,
  make:"Jeep",
  model:"Compass",
  year:2010,
  color:"#19b4b3",
  thumbnail:"http://dummyimage.com/101x229.png/5fa2dd/ffffff"
}
```

### [PATCH] /api/cars/:carId

> Return the modified car

Body

```javascript
{
  starred: true | false;
}
```
