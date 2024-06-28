# Customer Database Management Application

This project is a simple customer database management application built using Angular, NgRx, and Express with an SQLite database. The application allows users to load initial data into the database, query the database for customer information, and clear the database. The frontend provides a user-friendly interface with status notifications and loading spinners for better user experience.
![image](https://github.com/Capa03/Customer-Database-Management-Application/assets/79425111/e17720ce-e1d3-461c-952c-1c52d02bfdfe)

## Features

- **Load Database:** Inserts initial data into the SQLite database.
- **Query Database:** Retrieves and displays all customer records from the database.
- **Clear Database:** Deletes all customer records from the database.
- **Real-time status updates:** Shows loading spinners and status messages during operations.

## Project Structure

- **Backend (Express + SQLite):**
  - Provides REST API endpoints to load, query, and clear the database.
- **Frontend (Angular + NgRx):**
  - Provides a user interface to interact with the backend and perform database operations.
  - Uses NgRx for state management to handle loading spinners and status updates.

## Technologies Used

- **Frontend:**
  - Angular
  - NgRx (State Management)
  - Angular Material (UI Components)
- **Backend:**
  - Express.js
  - SQLite3
  - CORS

## Installation and Setup

### Prerequisites

- Node.js (v12 or higher)
- Angular CLI (v11 or higher)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/customer-db-app.git
   cd customer-db-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Express server:
   ```bash
   node server.js
   ```

   The server will run on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

## API Endpoints
  The API will be available at `http://localhost:3000`.
- **GET `/api/v1/load`:** Loads initial customer data into the database.
- **GET `/api/v1/query`:** Queries all customer data from the database.
- **GET `/api/v1/clear`:** Clears all customer data from the database.

## State Management with NgRx

### Actions

- **Load Database:**
  - `loadDb`
  - `loadDbSuccess`
  - `loadDbFailure`
- **Query Database:**
  - `queryDb`
  - `queryDbSuccess`
  - `queryDbFailure`
- **Clear Database:**
  - `clearDb`
  - `clearDbSuccess`
  - `clearDbFailure`

### Reducer

The reducer handles state transitions based on actions dispatched. The state includes:
- `customers`: List of customers.
- `error`: Error message.
- `status`: Status of the current operation (`'Loading' | 'Failed' | 'Loaded' | 'Pending'`).

### Effects

Effects handle side effects like API calls and dispatch appropriate success or failure actions.

### Component Interaction

The Angular component interacts with the NgRx store to dispatch actions and select state:

- Dispatch actions for loading, querying, and clearing the database.
- Subscribe to state changes to update the UI accordingly.

### UI Components

The application uses Angular Material components for a clean and responsive UI:

- Buttons for loading, querying, and clearing the database.
- Loading spinner for indicating ongoing operations.
- Status messages for success and error notifications.


## License

This project is licensed under the MIT License.

## Acknowledgements

- Angular
- NgRx
- Express.js
- SQLite
- Angular Material
