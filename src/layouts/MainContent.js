function MainContent(props) {
	return (
		<div className="col-span-3 sm:col-span-2 bg-blue-500 px-10 py-6 overflow-x-auto bg-opacity-10 dark:bg-opacity-20">
			<div className="flex flex-col">{props.children}</div>
		</div>
	);
}

export default MainContent;
