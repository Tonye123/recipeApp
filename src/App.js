import React, { useState, useEffect } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import RecipeDetails from "./components/recipeDetails";
import MyRecipes from "./components/myRecipes";
import { FavoriteContext } from "./components/favoriteContext";
import Footer from "./components/footer";

const App = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    if (localStorage["myRecipes"]) {
      setFavorite(JSON.parse(localStorage["myRecipes"]));
    } else {
      setFavorite([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myRecipes", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <FavoriteContext.Provider value={[favorite, setFavorite]}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/myRecipes/" component={MyRecipes} />
              <Route path="/:id/" component={RecipeDetails} />
            </Switch>
          </FavoriteContext.Provider>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
