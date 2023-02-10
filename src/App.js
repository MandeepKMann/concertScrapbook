import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase.js'
import { signOut } from 'firebase/auth'
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreatePost from './pages/CreatePost.js';

import dandelion from './assets/dandelion.png';

function App() {

    const [isAuth, setIsAuth] = useState(false);

    const signUserOut = () => {
        signOut(auth)
        .then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/login'
        })
    }

    return (
        <div className="App">
            <header>
                <div className="wrapper headerFlex">
                    <Link to='/'>
                        <img src={dandelion} alt="a dandelion" />
                    </Link>
                    <nav>
                        <Link to='/'>Home</Link>
                        {/* Removes login button if we are logged in */}
                        {!isAuth ? <Link to='/login'>Log In</Link> : <button onClick={signUserOut}>Log Out</button>}
                        <Link to='/createpost'>New Post</Link>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
                <Route path='/createpost' element={<CreatePost />} />
            </Routes>
        </div>
    );
}

export default App;
