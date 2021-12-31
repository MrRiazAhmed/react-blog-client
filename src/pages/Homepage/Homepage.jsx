import React, { useEffect, useState } from 'react';
import "./Homepage.css"
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from "axios";
import { useLocation } from "react-router";

const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("http://localhost:5000/server/posts" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
            <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
};

export default Homepage;