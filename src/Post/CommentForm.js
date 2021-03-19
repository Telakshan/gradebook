import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addComment } from "../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const style={
      maxWidth: '400px',
      marginLeft: '40px'
  }

  return (
    <div style={style}>
      <form
        className="form post-text"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, {text} );
          setText("");
        }}
      >
        <textarea
          className="text-area"
          name="text"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <br />
        <button type="submit post-button">
          <i className="fas fa-plus" />
          Comment
        </button>
        <Link to="/posts" className="link-button mt">
          Back to posts
        </Link>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
