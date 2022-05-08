import React from "react";

function Recipe ({recipe, deleteHandle}){

    const deleteRecipe = () => {
        deleteHandle(recipe.name);
    }


    return(
        <tr className="recipe" id ={recipe.name} >
            <td><p>{recipe.name}</p></td>
            <td><p>{recipe.cuisine}</p></td>
            <td><img src= {recipe.photo} /></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
            </tr>
    )
}

export default Recipe;
