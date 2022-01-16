import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoNotification from "../images/notice.png";
import moment from "moment";
import { isReadNotify, deleteAllNotifies } from "../redux/actions/notifyAction";

const NotifyModal = () => {
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIsRead = (msg) => {
    dispatch(isReadNotify({ msg, auth }));
  };

  const handleDeleteAll = () => {
    const newArr = notify.data.filter((item) => item.isRead === false);
    if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token));

    if (
      window.confirm(
        `You have ${newArr.length} unread notices. Are you sure you want to delete all?`
      )
    ) {
      return dispatch(deleteAllNotifies(auth.token));
    }
  };

  return (
    <div style={{ minWidth: "150px" }}>
      <div className="d-flex justify-content-between align-items-center px-3">
        <h4>Notification</h4>
      </div>
      <hr className="mt-0" />
      {notify.data.length === 0 && (
        <img src={NoNotification} alt="No Notification" className="w-100" />
      )}

      <div style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
        {notify.data.map((msg, index) => (
          <div key={index} className="px-2 mb-3">
            <Link
              to={`${msg.url}`}
              className="d-flex text-dark align-items-center"
              onClick={() => handleIsRead(msg)}
            >
              <div className="mx-2 flex-fill">
                <div>
                  <span>{msg.text}</span>
                </div>
              </div>
            </Link>
            <small className="text-muted d-flex justify-content-between px-2">
              {moment(msg.createdAt).fromNow()}
              {!msg.isRead && <i className="fas fa-circle text-primary" />}
            </small>
          </div>
        ))}
      </div>
      <hr className="my-1" />
      <div className="text-right text-danger mr-2" onClick={handleDeleteAll}>
        <span style={{ cursor: "pointer" }}>Delete All</span>
      </div>
    </div>
  );
};

export default NotifyModal;
