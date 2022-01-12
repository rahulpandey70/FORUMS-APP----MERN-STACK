import React from "react";

const LikeButton = ({ isLike, handleLike, handleUnlike }) => {
  return (
    <>
      {isLike ? (
        <i className="fas fa-thumbs-up text-danger" onClick={handleUnlike} />
      ) : (
        <i className="far fa-thumbs-up" onClick={handleLike} />
      )}
    </>
  );
};

export default LikeButton;
