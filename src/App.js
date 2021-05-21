import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Recipes from "./Components/Recipes";
import axios from "axios";

function App() {
   const [search, setSearch] = useState("");
   const [newSearch, setNewSearch] = useState("chicken");
   const [recipes, setRecipes] = useState([]);

   const YOUR_APP_ID = "135ac2ff";
   const YOUR_APP_KEY = "d6da505dcf58622685f944d3aee4819a";

   useEffect(async () => {
     console.log(newSearch)
      const res = await axios.get(
         `https://api.edamam.com/search?q=${newSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      setRecipes(res.data.hits);
   }, [newSearch]);

   const ClickEvent = () => {
      setNewSearch(search);
      console.log(newSearch);
      setSearch("");
   };
   const InputEvent = (e) => {
      setSearch(e.target.value);
   };
   return (
      <div className="App">
         <Header Search={search} inputEvent={InputEvent} click={ClickEvent} />
         <Recipes Recipes={recipes} />
      </div>
   );
}

export default App;
