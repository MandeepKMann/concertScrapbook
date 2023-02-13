import { useEffect, useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase.js';
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')

    const postsCollectionRef = collection(db, 'posts')

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
        });
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        } 
    }, []);

    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>Create a Post</h1>
                
                <div className="inputGroup">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="post">Post:</label>
                    <textarea 
                        name="post" 
                        id="post" 
                        cols="30" 
                        rows="10" 
                        placeholder="post" 
                        onChange={(e) => {
                            setPostText(e.target.value);
                        }}>
                    </textarea>
                </div>
                <div className="inputGroup">
                    <label htmlFor="files">Upload Images:</label>
                    <input type="file" className="fileUpload"/>
                </div>
                <button 
                    className="publish" 
                    onClick={createPost}
                >
                    Publish
                </button>
            </div>
        </div>
    )
}

export default CreatePost;