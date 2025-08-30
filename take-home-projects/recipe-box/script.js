let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let selectedIndex = null;

const recipeList = document.getElementById("recipeList");
const recipeModal = document.getElementById("recipeModal");
const editModal = document.getElementById("editModal");

const modalTitle = document.getElementById("modalTitle");
const modalIngredients = document.getElementById("modalIngredients");

const closeBtns = document.querySelectorAll(".close");

// Render Recipes
function renderRecipes() {
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.textContent = recipe.name;
    li.onclick = () => openRecipe(index);
    recipeList.appendChild(li);
  });
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

// Add Recipe
document.getElementById("addRecipeBtn").addEventListener("click", () => {
  const name = document.getElementById("recipeName").value.trim();
  const ingredients = document.getElementById("recipeIngredients").value.trim();
  if (name && ingredients) {
    recipes.push({ name, ingredients });
    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";
    renderRecipes();
  }
});

// Open Recipe Modal
function openRecipe(index) {
  selectedIndex = index;
  modalTitle.textContent = recipes[index].name;
  modalIngredients.textContent = "Ingredients: " + recipes[index].ingredients;
  recipeModal.style.display = "block";
}

// Delete Recipe
document.getElementById("deleteRecipeBtn").addEventListener("click", () => {
  recipes.splice(selectedIndex, 1);
  recipeModal.style.display = "none";
  renderRecipes();
});

// Edit Recipe
document.getElementById("editRecipeBtn").addEventListener("click", () => {
  document.getElementById("editName").value = recipes[selectedIndex].name;
  document.getElementById("editIngredients").value = recipes[selectedIndex].ingredients;
  recipeModal.style.display = "none";
  editModal.style.display = "block";
});

// Save Edit
document.getElementById("saveEditBtn").addEventListener("click", () => {
  recipes[selectedIndex].name = document.getElementById("editName").value.trim();
  recipes[selectedIndex].ingredients = document.getElementById("editIngredients").value.trim();
  editModal.style.display = "none";
  renderRecipes();
});

// Close modals
closeBtns.forEach(btn => {
  btn.onclick = () => {
    recipeModal.style.display = "none";
    editModal.style.display = "none";
  };
});

// Initial Render
renderRecipes();