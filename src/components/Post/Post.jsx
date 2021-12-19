import React from 'react';
import "./Post.css"

const Post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit eius ad voluptate excepturi ullam tenetur velit minima eum, reiciendis eaque sed voluptates. Quo veritatis sint quam voluptatibus perspiciatis deleniti!
                </p>
            </div>
        </div>
    );
};

export default Post;