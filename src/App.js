import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>

      <Routes>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route exact path="/company">
          <Company/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>
        
        <Route exact path="/newproject">
          <NewProject/>
        </Route>
      </Routes>

      <p>Footer</p>
    </Router>
  )
}

export default App;
