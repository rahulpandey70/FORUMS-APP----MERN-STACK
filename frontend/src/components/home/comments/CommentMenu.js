import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../../redux/actions/commentAction";

const CommentMenu = ({ post, comment, setOnEdit }) => {
	const { auth, socket } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleRemove = () => {
		if (post.user._id === auth.user._id || comment.user._id === auth.user._id) {
			dispatch(deleteComment({ post, auth, comment, socket }));
		}
	};

	const MenuItem = () => {
		return (
			<div className="">
				<div className="dropdown-item" onClick={() => setOnEdit(true)}>
					<span>Edit</span>
				</div>
				<div className="dropdown-item" onClick={handleRemove}>
					<span>Remove</span>
				</div>
			</div>
		);
	};

	return (
		<div className="menu">
			{(post.user._id === auth.user._id ||
				comment.user._id === auth.user._id) && (
				<div className="nav-item dropdown mt-2">
					<span
						className="material-icons mr-2 "
						id="moreLink"
						data-toggle="dropdown"
					>
						more_vert
					</span>

					<div className="dropdown-menu" aria-labelledby="moreLink">
						{post.user._id === auth.user._id ? (
							comment.user._id === auth.user._id ? (
								MenuItem()
							) : (
								<div className="dropdown-item" onClick={handleRemove}>
									<span className="material-icons">delete_outline</span> Remove
								</div>
							)
						) : (
							comment.user._id === auth.user._id && MenuItem()
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CommentMenu;
