# ICS2609_Lab2 - CRUD API Implementation

## Project Overview
This project is a CRUD API built with Node.js, Express, and MySQL. It focuses on managing student records through create, read, update, and delete operations. 
The goal is to provide a simple backend system for handling student information.

##  Setup Steps/How to Run
1. Download this repository
> https://github.com/julianamarialejo/ICS2609_Lab2 

2. Install dependencies
> npm install

3. Set up environment variables
> Copy .env.example to .env

4. Run the server
> npm run dev

5. API will be running at:
> http://localhost:3000

6. Test the health with browser
> http://localhost:3000/api/health

## Endpoints

Students
- POST /api/students → Create a new student
- GET /api/students → Get all students
- GET /api/students/:id → Get student by ID
- PUT /api/students/:id → Update student by ID
- DELETE /api/students/:id → Delete student by ID

Courses
- POST /api/courses → Create a new course
- GET /api/courses → Get all courses
- GET /api/courses/:id → Get course by ID
- PUT /api/courses/:id → Update course by ID
- DELETE /api/courses/:id → Delete course by ID
