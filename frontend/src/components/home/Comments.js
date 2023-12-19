import React, { useState, useEffect } from "react";
import CommentDisplay from "./comments/CommentDisplay";

const Comments = ({ post }) => {
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState([]);
	const [next, setNext] = useState(1);
	const [replyComments, setReplyComments] = useState([]);

	useEffect(() => {
		const newComment = post.comments.filter((cm) => !cm.reply);
		setComments(newComment);
		setShowComments(newComment.slice(newComment.length - next));
	}, [post.comments, next]);

	useEffect(() => {
		const newRep = post.comments.filter((cm) => cm.reply);
		setReplyComments(newRep);
	}, [post.comments]);

	return (
		<div className="comments">
			{showComments.map((comment, index) => (
				<CommentDisplay
					key={index}
					comment={comment}
					post={post}
					replyCm={replyComments.filter((item) => item.reply === comment._id)}
				/>
			))}

			{comments.length - next > 0 ? (
				<span
					className="p-2"
					style={{ cursor: "pointer", color: "cyan" }}
					onClick={() => setNext(next + 10)}
				>
					See more comments...
				</span>
			) : (
				comments.length > 1 && (
					<span
						className="p-2"
						style={{ cursor: "pointer", color: "cyan" }}
						onClick={() => setNext(1)}
					>
						Hide comments...
					</span>
				)
			)}
		</div>
	);
};

export default Comments;
