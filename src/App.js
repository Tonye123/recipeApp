import React,{useState} from 'react'
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import RecipeDetails from './components/recipeDetails'
import MyRecipes from './components/myRecipes'
import { FavoriteContext } from './components/favoriteContext'



const App = () => {
    const[ favorite, setFavorite] = useState([])

    return(
        <Router>
            <div>
                <Header />
                
                    <FavoriteContext.Provider value={[favorite,setFavorite]}>
                       <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/myRecipes/" component={MyRecipes}  />
                            <Route path="/:id/"  component={RecipeDetails} />
                        </Switch> 
                    </FavoriteContext.Provider>
                    
                

            </div>





        </Router>
    )
}


export default App