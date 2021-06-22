import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import './App.css';
import Blogpage  from './components/blogpage';
import Navbar from './components/navbar';
import Aboutus from './components/aboutus';
function App() {
  return (
    <>
      <div className="container">
      <Router>
           <Navbar/>
           <Switch>
             <Route path="/Blog" exact component={Blogpage}/>
             <Route path="/About Us" exact component={Aboutus}/>
           </Switch>
           </Router>
           
          
         
         
      
      </div>

      
      
    </>
  );
}

export default App;
