import React from "react";
import NotifyModal from "../NotifyModal";
import Avatar from "../Avatar";
import { logout } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        <li className="nav-item dropdown">
          <span
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span
              className="fa fa-bell"
              style={{
                fontSize: "25px",
                marginTop: "3px",
                color: notify.data.length > 0 ? "crimson" : "white",
              }}
            ></span>
          </span>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <NotifyModal />
          </div>
        </li>

        <li className="nav-item dropdown">
          <span
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>

            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
              Log Out
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
