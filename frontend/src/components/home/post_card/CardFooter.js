import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Send from "../../../images/send.svg";
import LikeButton from "../../LikeButton";
import { useSelector, useDispatch } from "react-redux";
import { likePost, unLikePost } from "../../../redux/actions/postAction";
import ShareModal from "../../ShareModal";
import { BASE_URL } from "../../../utils/config";

const CardFooter = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [LoadLike, setLoadLike] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (LoadLike) return;
    setIsLike(true);

    setLoadLike(true);
    await dispatch(likePost({ post, auth, socket }));
    setLoadLike(false);
  };
  const handleUnlike = async () => {
    if (LoadLike) return;
    setIsLike(false);

    setLoadLike(true);
    await dispatch(unLikePost({ post, auth, socket }));
    setLoadLike(false);
  };

  return (
    <div className="card_footer">
      <div className="card_icon_menu">
        <div>
          <LikeButton
            isLike={isLike}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
          />
        </div>

        <div>
          <Link to={`/post/${post._id}`} className="text-dark">
            <i className="far fa-comment" />
          </Link>
        </div>

        <div style={{ marginTop: "20px", cursor: "pointer" }}>
          <img src={Send} alt="Send" onClick={() => setIsShare(!isShare)} />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
          {post.likes.length} likes
        </h6>

        <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
          {post.comments.length} comments
        </h6>
      </div>

      {isShare && <ShareModal url={`${BASE_URL}/post/${post._id}`} />}
    </div>
  );
};

export default CardFooter;
