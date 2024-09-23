import { Dropdown } from "./common";

const OptinList = ["profile", "settings", "logout"];

export const UserDropdown = () => {
	return (
		<div className="absolute border border:border top-14 right-0 transform -translate-x-1/2 z-10">
			<Dropdown OptionList={OptinList} />
		</div>
	);
};
