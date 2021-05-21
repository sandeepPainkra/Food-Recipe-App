import React from "react";

const Header = ({ Search, inputEvent, click }) => {
   return (
      <>
         <div className="jumbotron text-center py-md-5">
            <h1 className="display-md-2 display-4 h1 mb-3">Food Recipe</h1>
            <div className="d-flex justify-content-center flex-md-nowrap flex-wrap text-center  mx-auto w-md-50 w-75">
               <input
               value={Search}
                  onChange={inputEvent}
                  type="text"
                  placeholder="Search your Food recipe.."
                  className="w-75 rounded px-2 py-md-1 py-2 mb-md-0 mb-2"
               />
               <button
                  onClick={click}
                  className="btn btn-lg btn-success my_btn"
               >
                  Search food
               </button>
            </div>
         </div>
      </>
   );
};

export default Header;
