import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const CommentDisplay = ({ comment, post, replyCm }) => {
	const [showRep, setShowRep] = useState([]);
	const [next, setNext] = useState(1);

	useEffect(() => {
		setShowRep(replyCm.slice(replyCm.length - next));
	}, [replyCm, next]);

	return (
		<div className="comment_display">
			<CommentCard comment={comment} post={post} commentId={comment._id}>
				<div className="pl-5">
					{showRep.map(
						(item, index) =>
							item.reply && (
								<CommentCard
									key={index}
									comment={item}
									post={post}
									commentId={comment._id}
								/>
							)
					)}

					{replyCm.length - next > 0 ? (
						<span
							style={{ cursor: "pointer", color: "cyan", marginTop: "5px" }}
							onClick={() => setNext(next + 10)}
						>
							See more comments...
						</span>
					) : (
						replyCm.length > 1 && (
							<span
								style={{ cursor: "pointer", color: "cyan", marginTop: "5px" }}
								onClick={() => setNext(1)}
							>
								Hide comments...
							</span>
						)
					)}
				</div>
			</CommentCard>
		</div>
	);
};

export default CommentDisplay;
