import { HeartIcon } from "@heroicons/react/solid";

function Wrapper(props) {
	return (
		<div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-50 dark:text-white dark:bg-gray-900">
			<div className="app-window grid grid-cols-3 shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-black">
				{props.children}
			</div>
			<span className="pt-8">
				Made with <HeartIcon className="w-5 h-5 inline text-red-500" />{" "}
				by{" "}
				<a
					className="font-medium text-blue-500"
					href="https://bilhim.github.io/"
				>
					Bilal Himite
				</a>
				.
			</span>
		</div>
	);
}

export default Wrapper;
