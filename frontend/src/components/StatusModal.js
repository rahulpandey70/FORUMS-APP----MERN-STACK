import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postAction";
import { GLOBALTYPES } from "../redux/actions/globalTypes";

const StatusModal = () => {
  const { auth, status, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "Please add your content." },
      });

    dispatch(createPost({ content, auth, socket }));

    setContent("");
    dispatch({ type: GLOBALTYPES.STATUS, payload: false });
  };

  useEffect(() => {
    if (status.onEdit) {
      setContent(status.content);
    }
  }, [status]);

  return (
    <>
      <form className="status_modal" onSubmit={handleSubmit}>
        <span
          onClick={() =>
            dispatch({
              type: GLOBALTYPES.STATUS,
              payload: false,
            })
          }
        ></span>

        <div className="status_body">
          <textarea
            name="content"
            value={content}
            placeholder={"Ask a Question!"}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="status_footer">
          <button className="btn btn-secondary" type="submit">
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default StatusModal;
