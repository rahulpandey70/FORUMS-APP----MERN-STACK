import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../PostCard";

import LoadMoreBtn from "../LoadMorebtn";
import LoadMore from "../../images/loadmore.svg";
import { getDataAPI } from "../../utils/fetchData";
import { POST_TYPES } from "../../redux/actions/postAction";

const Posts = () => {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch;

  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = async () => {
    setLoadMore(true);
    const res = await getDataAPI(
      `posts?limit=${homePosts.page * 7}`,
      auth.token
    );

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });
    setLoadMore(false);
  };

  return (
    <div className="posts">
      {homePosts.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      {loadMore && (
        <img src={LoadMore} alt="Loading" className="d-block mx-auto" />
      )}

      <LoadMoreBtn
        result={homePosts.result}
        page={homePosts.page}
        loadMore={loadMore}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Posts;
