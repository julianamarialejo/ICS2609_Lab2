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
- POST http://localhost:3000/api/students/ – Create student
- GET http://localhost:3000/api/students/ – Get all students
- GET http://localhost:3000/api/students/:id – Get student by ID
- PUT http://localhost:3000/api/students/:id – Update student
- DELETE http://localhost:3000/api/students/:id – Delete student

Courses
- POST http://localhost:3000/api/courses/ – Create course
- GET http://localhost:3000/api/courses/ – Get all courses
- GET http://localhost:3000/api/courses/:id – Get course by ID
- PUT http://localhost:3000/api/courses/:id – Update course
- DELETE http://localhost:3000/api/courses/:id – Delete course
