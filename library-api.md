# Library Books API

A REST API design for managing books in a library.

## Endpoints

- **GET /books**
  - List all books
  - Success: 200 OK

- **GET /books/{id}**
  - Get details of one book by ID
  - Success: 200 OK

- **POST /books**
  - Create a new book
  - Example request body:
    ```json
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    }
    ```
  - Success: 201 Created

- **PUT /books/{id}**
  - Update an existing book
  - Example request body:
    ```json
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1926
    }
    ```
  - Success: 200 OK

- **DELETE /books/{id}**
  - Delete a book by ID
  - Success: 204 No Content

- **GET /books?author={name}**
  - List all books by a given author using a query parameter
  - Success: 200 OK

## Error Codes

- **400 Bad Request**
  - Example: Missing required field `title` when creating a book.

- **404 Not Found**
  - Example: Requesting `/books/999` when no book with ID 999 exists.