import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { getPosts } from "../actions/post";
import PropTypes from "prop-types";
import PostItem from './PostItem';
import Loading from "../Loading/Loading";
import AddPost from "./AddPost";

import './AddPost.css'

const Posts = ({getPosts, post: {posts, loading}}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

   
    
  return loading ? <Loading/> : (
    <Fragment>
      <h1>Posts</h1> 
      <p className='welcome'>
        <i className='fas fa-user'></i> Welcome to gradebook
      </p>
      <Link to='addpost' className='link-button'>
        Add Post
      </Link>
      <div>
        {posts.map(post => (
          <PostItem key={post._id} post={post}/>
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
