function Modal(props) {
	function exitHandler() {
		props.onModalExit();
	}

	return (
		<div>
			{props.isOpen && (
				<div className="absolute top-0 left-0 z-30 items-center justify-center flex w-screen h-screen">
					<div
						onClick={exitHandler}
						className="absolute top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-20"
					/>
					<div className="bg-white w-96 mb-3 px-8 py-6 rounded-lg shadow-lg z-40 dark:bg-gray-800 dark:text-white">
						{props.children}
					</div>
				</div>
			)}
		</div>
	);
}

function ModalButton(props) {
	return (
		<button
			onClick={props.onClick}
			className={
				props.isPrimary
					? "px-5 py-1 m-1 font-medium bg-red-500 text-white rounded-lg hover:bg-red-400"
					: "px-5 py-1 m-1 font-medium rounded-lg hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-20"
			}
		>
			{props.children}
		</button>
	);
}

function ModalTitle(props) {
	return <h1 className="text-xl font-medium mb-3">{props.children}</h1>;
}

function ModalText(props) {
	return (
		<p className="mb-5 text-black dark:text-white text-opacity-70 dark:text-opacity-70">
			{props.children}
		</p>
	);
}

export { Modal, ModalButton, ModalTitle, ModalText };
