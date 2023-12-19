import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkImage } from "../../utils/imageUpload";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { updateProfileUser } from "../../redux/actions/profileAction";

const EditProfile = ({ setOnEdit }) => {
	const initState = {
		fullname: "",
		about: "",
	};

	const [userData, setUserData] = useState(initState);
	const { fullname, about } = userData;

	const [avatar, setAvatar] = useState("");
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		setUserData(auth.user);
	}, [auth.user]);

	const changeAvatar = (e) => {
		const file = e.target.files[0];
		const err = checkImage(file);
		if (err)
			return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });

		setAvatar(file);
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateProfileUser({ userData, avatar, auth }));
	};

	return (
		<div className="edit_profile">
			<form onSubmit={handleSubmit}>
				<div className="close" onClick={() => setOnEdit(false)}>
					&times;
				</div>
				<div className="info_avatar">
					<img
						src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
						alt="avatar"
					/>
					<span>
						<i className="fas fa-camera" />
						<p>Change</p>
						<input
							type="file"
							name="file"
							id="file_up"
							accept="image/*"
							onChange={changeAvatar}
						/>
					</span>
				</div>

				<div className="form-group">
					<label htmlFor="fullname">Full Name</label>
					<div className="position-relative">
						<input
							type="text"
							className="form-control"
							id="fullname"
							name="fullname"
							value={fullname}
							onChange={handleInput}
						/>
						<small
							className="text-danger position-absolute"
							style={{
								top: "50%",
								right: "5px",
								transform: "translateY(-50%)",
							}}
						>
							{fullname.length}/30
						</small>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="about">About</label>
					<textarea
						name="about"
						value={about}
						className="form-control"
						onChange={handleInput}
					/>

					<small className="text-danger d-block text-right">
						{about.length}/200
					</small>
				</div>

				<button className="btn btn-info w-100" type="submit">
					Save
				</button>
			</form>
		</div>
	);
};

export default EditProfile;
