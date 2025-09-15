const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'data', 'recipes.json');

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Utility functions
const loadRecipes = () => {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveRecipes = (recipes) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(recipes, null, 2));
};

// GET all recipes
app.get('/api/recipes', (req, res) => {
  try {
    const recipes = loadRecipes();
    res.json(recipes);
  } catch {
    res.status(500).json({ error: 'Failed to load recipes' });
  }
});

// POST a new recipe
app.post('/api/recipes', (req, res) => {
  const { title, ingredients, instructions, cookTime, difficulty } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newRecipe = {
    id: Date.now(),
    title,
    ingredients,
    instructions,
    cookTime: cookTime || '',
    difficulty: difficulty || 'medium'
  };

  try {
    const recipes = loadRecipes();
    recipes.push(newRecipe);
    saveRecipes(recipes);
    res.status(201).json(newRecipe);
  } catch {
    res.status(500).json({ error: 'Failed to save recipe' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});