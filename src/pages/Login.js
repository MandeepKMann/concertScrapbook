import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // allows user to stay logged in even when they've closed the tab and then come back
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/')
        });
    }

    return (
        <div className="loginPage">
            <div className="loginContent">
                <h1>Sign In With Google to Continue</h1>
                <button className="loginButton" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login;