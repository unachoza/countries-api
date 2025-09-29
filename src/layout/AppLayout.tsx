import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const AppLayout = () => {
	return (
		<div>
			<Header text="Where in the World" />
			<Outlet />
		</div>
	);
};

export default AppLayout;
