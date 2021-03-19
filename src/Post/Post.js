import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { getPost } from "../actions/post";
import {Link} from 'react-router-dom';
import PostItem from "../Posts/PostItem";
import CommentForm from '../Post/CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  console.log(match.params.id);
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Loading />
  ) : (
    <Fragment>
      <Link to="/posts" className="link-button mt">
        Back to posts
      </Link>

      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id}/>
      <div className='comments'>
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={post._id}/>
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
