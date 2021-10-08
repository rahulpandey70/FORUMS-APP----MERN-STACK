import React from 'react';
import { Link } from 'react-router-dom';

const PostThumb = ({posts, result}) => {

    if(result === 0) return <h2 className="text-center text-danger">No Post</h2>

    return (
        <>
            <h1 className="text-center">Your Activity</h1>
                <div className="post_thumb">
                        {
                            posts.map(post => (
                                <Link key={post._id} to={`/post/${post._id}`}>
                                    
                                    <div className="card_post-display">
                                        {post.content}
                                    </div>

                                    <div className="post_thumb_menu">
                                        <i className="far fa-thumbs-up mr-2">{post.likes.length}</i>
                                        <i className="far fa-comment mr-2">{post.comments.length}</i>
                                    </div>

                                </Link>
                            ))
                        }
                </div>
        </>
    )
}

export default PostThumb
