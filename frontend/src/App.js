import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";

import Home from "./pages/Home";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import StatusModal from "./components/StatusModal";

import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import { getPosts } from "./redux/actions/postAction";
import { getSuggestions } from "./redux/actions/suggestionsAction";
import { getNotifies } from "./redux/actions/notifyAction";

import io from "socket.io-client";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import SocketClient from "./SocketClient";
import Dashboard from "./pages/LoginSignupPage";

function App() {
	const { auth, status, modal } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshToken());

		const socket = io();
		dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
		return () => socket.close();
	}, [dispatch]);

	useEffect(() => {
		if (auth.token) {
			dispatch(getPosts(auth.token));
			dispatch(getSuggestions(auth.token));
			dispatch(getNotifies(auth.token));
		}
	}, [dispatch, auth.token]);

	return (
		<Router>
			<Alert />
			<div className={`App ${(status || modal) && "mode"}`}>
				{auth.token && <Header />}
				<div className="main">
					{status && <StatusModal />}
					{auth.token && <SocketClient />}

					<PrivateRouter path="/" component={Home} />

					<Route
						exact
						path="/:parameter(login|register)"
						component={Dashboard}
					/>

					<PrivateRouter exact path="/:page" component={PageRender} />
					<PrivateRouter exact path="/:page/:id" component={PageRender} />
				</div>
			</div>
		</Router>
	);
}

export default App;
