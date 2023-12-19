import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import profile from "./profileReducer";
import status from "./statusReducer";
import homePosts from "./postReducer";
import modal from "./modalReducer";
import detailPost from "./detailPostReducer";
import suggestions from "./suggestionsReducer";
import notify from "./notifyReducer";
import socket from "./socketReducer";

export default combineReducers({
	auth,
	alert,
	profile,
	status,
	homePosts,
	modal,
	detailPost,
	suggestions,
	notify,
	socket,
});
