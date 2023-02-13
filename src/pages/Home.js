import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase.js';

const Home = (isAuth) => {

    const [postsList, setPostsList] = useState([]);
    const postsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc)
    }

    return (
        <div className="homePage">
            <h1>Home</h1>
            {postsList.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <div className="postTitle">
                            <h2>
                                {post.title}
                            </h2>
                        </div>
                        <div className="deletePost">
                            {isAuth && post.author.id === auth.currentUser.uid && (
                                <button
                                    onClick={() => {
                                        deletePost(post.id);
                                    }}
                                >
                                    {" "}
                                    x
                                </button>
                            )}
                        </div>
                        <div className="postText">
                            {post.postText}
                        </div>
                        <h3>{post.author.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;