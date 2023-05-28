import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/home";
import Connexion from "./pages/connexion";
import Account from "./pages/account";
import SignUp from './pages/sign-up';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/account" element={<Account />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route }
// 	from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';

// function App() {
// 	return (
// 		<Router>
// 			<Navbar />
// 			<Routes>
// 				<Route exact path='/' exact element={<Home />} />
// 				<Route path='/about' element={<About />} />
// 				<Route path='/contact' element={<Contact />} />
// 				<Route path='/blogs' element={<Blogs />} />
// 				<Route path='/sign-up' element={<SignUp />} />
// 			</Routes>
// 		</Router>
// 	);
// }

// export default App;
