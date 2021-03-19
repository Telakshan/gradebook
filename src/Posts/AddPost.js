import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/post";
import { Link } from "react-router-dom";

import "./AddPost.css";

const AddPost = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="register">
      <h2>Tell us something we don't know...</h2>

      <form
        className="form post-text"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
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
            Post
          </button>
          <Link to='/posts' className='link-button mt'>Back to posts</Link>

      </form>

    </div>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
