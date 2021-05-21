import React from "react";

const Recipes = ({ Recipes }) => {
   return (
      <div className="p-5 mt-5 d-flex flex-wrap">
         {Recipes.map((recipe) => (
            <>
               <div className="col-md-3 col-12 mb-md-5 mb-3">
                  <div className="card text-center">
                     <img
                        src={recipe.recipe.image}
                        className="card-img-top"
                        alt="..."
                     />
                     <div className="card-body">
                        <h5 className="card-title">{recipe.recipe.label}</h5>
                     </div>
                     <ul className="list-group list-group-flush">
                     {recipe.recipe.ingredientLines.map((ingridient) => (
                        <>
                           <li className="list-group-item">{ingridient}</li>
                        </>
                     ))}
                  </ul>
                  </div>
                  
               </div>
            </>
         ))}
      </div>
   );
};
export default Recipes;
