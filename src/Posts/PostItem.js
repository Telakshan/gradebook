import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, unlike, deletePost } from "../actions/post";

import "./PostItem.css";

const PostItem = ({
  addLike,
  unlike,
  deletePost,
  auth,
  post: { _id, text, name, user, likes, comments, date },
  showActions,
}) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="post-container">
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>

      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
        </p>
        <div className="button-container">
          {showActions && (
            <Fragment>
              <button
                onClick={(e) => {
                  addLike(_id);
                  refresh();
                }}
                type="button"
                className="but"
              >
                <span>{likes.length}</span>
                <i className="fas fa-thumbs-up"></i>
              </button>

              <button
                onClick={(e) => {
                  unlike(_id);
                  refresh();
                }}
                type="button"
                className="but"
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="link-button">
                {comments.length > 0 && <span>{comments.length} </span>}
                <i className="fas fa-comment"></i>
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  className="delete"
                  onClick={(e) => {
                    deletePost(_id);
                    refresh();
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, unlike, deletePost })(
  PostItem
);
