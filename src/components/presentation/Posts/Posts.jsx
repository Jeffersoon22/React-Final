import React, { useState, useEffect } from "react";
import Post from "../../container/Post/Post";
import axios from "axios";
import { connect } from "react-redux";
import { addAllPosts } from "../../../store/actions/postsActions";
import Loading from "../Loading/Loading";

import { BASE_URL, APP_ID } from "../../../services/endpoint";

function Posts(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!props.posts.length) {
      setLoading(true);
      axios
        .get(`${BASE_URL}/post`, { headers: { "app-id": APP_ID } })
        .then(({ data }) => {
          let newArr = [];
          data.data.forEach((el) => {
            newArr = [...newArr, { ...el, liked: false, comments: [] }];
          });
          props.addPosts(newArr);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <h1>Posts</h1>
      <Post />;
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addPosts: (posts) => dispatch(addAllPosts(posts)),
  };
}

const mapStateToProps = (state) => ({
  posts: state.allPosts.allItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
