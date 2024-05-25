# ReactJS and NodeJS Web App

## Overview

This project is a full-stack web application built with ReactJS and NodeJS. It features a user authentication system (login/signup) and a to-do list functionality. Users can create, read, update, and delete their to-do items. The application is designed to be clean and responsive.

## Features

1. **User Authentication**: Login and signup functionality with user data stored in a database.
2. **To-Do List**: 
   - Users can create, delete, and update to-do items.
   - Only logged-in users can manage their to-do lists.
3. **Responsive Design**: The application is designed to be clean and responsive.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/KamleshChandel04/todo-mern.git
    cd todo-mern
    ```

2. **Set up environmental variables**:
    - Create a `.env` file in the `backend` folder with the necessary environment variables (e.g., database connection strings).

### Running the Project

1. **Backend Setup**:
    - Open a terminal and navigate to the `backend` folder:
        ```bash
        cd backend
        ```
    - Install the dependencies:
        ```bash
        npm install
        ```
    - Start the backend server:
        ```bash
        npm start
        ```

2. **Frontend Setup**:
    - Open another terminal and navigate to the `frontend` folder:
        ```bash
        cd frontend
        ```
    - Install the dependencies:
        ```bash
        npm install
        ```
    - Start the frontend development server:
        ```bash
        npm start
        ```

### Accessing the Application

- It will open your browser and navigate to `http://localhost:3000`.
- You will be presented with a login page. 
    - If you already have an account, you can log in using your email and password.
    - If not, you can register by clicking on the register option provided in the form.

### Using the To-Do List

- Upon successful login, you will be redirected to the dashboard page.
- Here, you can create a to-do item by entering a title in the provided form and clicking the submit button.
- Each to-do item can have multiple sub-tasks which you can add under the main to-do title.
- You can perform CRUD (Create, Read, Update, Delete) operations on your to-do items and sub-tasks.
- There is a logout button available to sign out and return to the login page.



## Technologies Used

- **Frontend**: ReactJS, CSS
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
