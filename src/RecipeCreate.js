import React, { useState } from "react";

function RecipeCreate({ submitRecipe }) {
  // TODO: Add the required input and textarea form elements.

  const initialRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPrep] = useState("");

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  function createRecipe(event) {
    const id = Date.now();

    const recipe = {
      id: id,
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation,
    };

    return recipe;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const recipe = createRecipe(event);


    setName(initialRecipe.name);
    setCuisine(initialRecipe.cuisine);
    setPhoto(initialRecipe.photo);
    setIngredients(initialRecipe.ingredients);
    setPrep(initialRecipe.preparation);


    submitRecipe(recipe);
  };

  // TODO: Add the required submit and change handlers
  const handleType = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "cuisine":
        setCuisine(event.target.value);
        break;
      case "photo":
        setPhoto(event.target.value);
        break;
      case "ingredients":
        setIngredients(event.target.value);
        break;
      case "preparation":
        setPrep(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table className="recipeForm">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Recipe Name"
                onChange={handleType}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={cuisine}
                onChange={handleType}
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                placeholder="URL"
                value={photo}
                onChange={handleType}
                required
              />
            </td>
            <td>
              <textarea
                type="text"
                name="ingredients"
                placeholder="Recipe Ingredients"
                value={ingredients}
                onChange={handleType}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                type="text"
                name="preparation"
                placeholder="Preparation Instructions"
                value={preparation}
                onChange={handleType}
                required
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
