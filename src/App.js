import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreatePost from './pages/CreatePost.js';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/createpost' element={<CreatePost />} />
            </Routes>
        </div>
    );
}

export default App;
