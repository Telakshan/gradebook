import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { deleteComment } from "../actions/post";

import "./CommentItem.css";

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <div className="comment">
      <h4>{name}</h4>
      <p>{text}</p>
      <p>
        Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
      </p>
      {!auth.loading && user === auth.user._id && (
        <button onClick={() => deleteComment(postId, _id)} type="button" className='delete'>
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
