# Dynamic Dashboard

To run the project, follow these steps:

1. Clone the repository
2. Open the terminal and navigate to the `server` directory
3. Run `npm i`
4. Run `npm start`
5. Open another terminal and navigate to the `client` directory
6. Run `npm i`
7. Run `npm start`

# About Project

## - Widget request for data from api when they are about to enter viewport

## API Endpoint

To change position of widget

`POST /api/:id/widget/:id2`

### Description

This API is used to change the position of a widget in a particular dashboard. `:id` represents the dashboard identifier and `:id2` represents the widget \_id.

### Request Body

```json
{
    "position": 1
}
```

### Steps to Test

-   Start the server using npm start.
-   Open Postman or any equivalent tool.
-   Create a new POST request and enter the API endpoint URL: http://localhost:3001/api/:id/widget/:id2.
-   In the request body, enter the new position for the widget: {"position": 1}.
-   Send the request.
-   The response will contain an array of widget objects with updated positions
