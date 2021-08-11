import React from "react";

function ToggleMenu(props) {
	const [isMenuToggled, setIsMenuToggled] = React.useState(false);

	function toggleMenuHandler() {
		setIsMenuToggled(!isMenuToggled);
	}

	return (
		<div>
			<div
				onClick={toggleMenuHandler}
				className={
					isMenuToggled
						? "w-screen h-screen absolute right-0 top-0 bg-transparent backdrop-filter backdrop-brightness-75 z-20"
						: "invisible"
				}
			/>
			<div className="relative -mb-0.5 -mt-0.5 -mr-1">
				<button
					type="button"
					className={
						isMenuToggled
							? "p-1.5 rounded-full bg-blue-500 bg-opacity-10"
							: "p-1.5 rounded-full hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-10"
					}
					onClick={toggleMenuHandler}
				>
					{props.children[0]}
				</button>
				<div className={isMenuToggled ? "visible" : "invisible"}>
					<div className="z-30 absolute right-0 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white">
						{props.children[1]}
					</div>
				</div>
			</div>
		</div>
	);
}

function ToggleMenuButton(props) {
	function clickHandler() {
		props.onClick();
	}
	return (
		<button
			onClick={clickHandler}
			type="button"
			className="flex items-center font-medium px-3 pr-6 py-2 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-10"
		>
			{props.children}
		</button>
	);
}

export { ToggleMenu, ToggleMenuButton };
