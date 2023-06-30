Unit Tests for the last release
  E2E tests
    Authentication
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ register does not work with empty fields (2700ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/register
      √ register makes correct API call (4340ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ login makes correct API call (3699ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/users/logout
      √ logout makes correct API call (4408ms)
    Navigation bar
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ guest user should see correct navigation (1593ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ logged user should see correct navigation (3368ms)
    Catalog
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/data/catches
      √ load catches (2653ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ before load catches (2126ms)
    CRUD
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
      √ create does NOT work with empty fields (4842ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/data/catches
      √ create makes correct API call for logged in user (8643ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/data/catches
      1) non-author can't click on other post
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/data/catches
      2) author can click on other post
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/data/catches
>>> PUT http://localhost:3030/data/catches/1001
      √ edit makes correct API call for logged in user (7019ms)
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> POST http://localhost:3030/users/login
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
Preventing external call to https://fonts.googleapis.com/css?family=Open+Sans
>>> GET http://localhost:3030/data/catches
>>> DELETE http://localhost:3030/data/catches/1001
      √ delete makes correct API call for logged in user (6462ms)


  12 passing (1m)
  2 failing

  1) E2E tests
       CRUD
         non-author can't click on other post:

      AssertionError: expected 0 to equal 2
      + expected - actual

      -0
      +2

      at Context.<anonymous> (tests\e2e.test.js:314:35)

  2) E2E tests
       CRUD
         author can click on other post:

      AssertionError: expected 0 to equal 2
      + expected - actual

      -0
      +2

      at Context.<anonymous> (tests\e2e.test.js:333:35)
