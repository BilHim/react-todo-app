function SideNavigation(props) {
	return (
		<div className="flex flex-col justify-between h-full">
			{props.children}
		</div>
	);
}

export default SideNavigation;
