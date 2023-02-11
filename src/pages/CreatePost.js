const CreatePost = () => {
    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>Create a Post</h1>
                
                <div className="inputGroup">
                    <label htmlFor="title">Title:</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="post">Post:</label>
                    <textarea name="post" id="post" cols="30" rows="10" placeholder="post"></textarea>
                </div>
                <div className="inputGroup">
                    <label htmlFor="files">Upload Images:</label>
                    <input type="file" className="fileUpload"/>
                </div>
                <button className="publish">Publish</button>
            </div>
        </div>
    )
}

export default CreatePost;