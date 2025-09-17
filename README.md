# Recipe API yourname

This project is a backend API for a recipe sharing platform. It allows users to add new recipes and fetch all existing recipes. The API is built with Node.js and Express and is deployed on Render.

---

## Project Overview

**Task 1:** Add new recipes via POST /api/recipes
**Task 2:** Retrieve all recipes via GET /api/recipes
Recipes are stored persistently in data/recipes.json
CORS is enabled to allow frontend integration
The API validates required fields and automatically assigns IDs and default difficulty

---

## How to Run Locally

1. **Clone the repository**
bash

git clone https://github.com/your-github-username/recipe-api-yourname.git
cd recipe-api-yourname

2. **Install dependencies**
npm install

3. **Start the server**
npm start


4. **The API runs on:**
http://localhost:3000/api/recipes

5. **Deployed API URL**
access the live api at : https://recipe-api-yourname-khatheeja-reemu.onrender.com

6. **API Endpoint Documentation**
URL: /api/recipes
Method: POST
Headers:
Content-Type: application/json