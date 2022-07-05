import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './pages/home/Home'
import { Create } from './pages/create/Create'
import { Search } from './pages/search/Search'
import { Recipe } from './pages/recipe/Recipe'
import { ThemeSelector } from './components/ThemeSelector';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/create' component={ Create } />
          <Route path='/search' component={ Search } />
          <Route path='/recipes/:id' component={ Recipe } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
