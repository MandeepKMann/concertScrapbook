import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreatePost from './pages/CreatePost.js';

import dandelion from './assets/dandelion.png';

function App() {
    return (
        <div className="App">
            <header>
                <div className="wrapper headerFlex">
                    <Link to='/'>
                        <img src={dandelion} alt="a dandelion" />
                    </Link>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Log In</Link>
                        <Link to='/createpost'>New Post</Link>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/createpost' element={<CreatePost />} />
            </Routes>
        </div>
    );
}

export default App;
