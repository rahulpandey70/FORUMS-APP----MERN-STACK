import React, { useState } from "react";

const CardBody = ({ post }) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<div className="card_body">
			<div className="card_body-content">
				<span>
					{post.content.length < 190
						? post.content
						: readMore
						? post.content + " "
						: post.content.slice(0, 190) + "...."}
				</span>

				{post.content.length > 190 && (
					<span className="readMore" onClick={() => setReadMore(!readMore)}>
						{readMore ? "Less" : "More"}
					</span>
				)}
			</div>
		</div>
	);
};

export default CardBody;
