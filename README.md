# Exemple of a very simple REST API

## Made with

- Node.js Express
- Nodemon
- package UUID

## What UUID is used for ?

UUID is used to give a unique index to each product that will be created.
You can use this ID to precisely target products in order to delete them, or modify them.

## How to test this tiny app ?

- first step after you've clone this repository : `npm install`

-------

- to simplify as much as possible, there is voluntarily no database.
To replace it, there is a simple empty array `let products = []` which is declared in the controller.
So to test, and to manipulate this code, you have to start by creating products and then read, modify or delete them.
- The best way to test all the routes is to use Insomnia or Postman.

Have fun !
