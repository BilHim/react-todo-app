import React from "react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

function Search(props) {
	const history = useHistory();
	const searchRef = React.useRef();

	function searchHandler(e) {
		e.preventDefault();
		const query = searchRef.current.value;
		if (query.trim() !== "") {
			history.push("/search/" + query);
		}
	}

	return (
		<form
			onSubmit={searchHandler}
			className="flex flex-row flex-grow items-center text-black text-opacity-70 dark:text-white dark:text-opacity-70 hover:text-opacity-90 focus-within:text-opacity-90 dark:hover:text-opacity-90 dark:focus-within:text-opacity-90"
		>
			<button className="flex-none flex justify-center items-center w-8 h-8 rounded-full hover:bg-black hover:bg-opacity-10">
				<SearchIcon className="flex-none w-6 h-6" />
			</button>
			<input
				type="text"
				ref={searchRef}
				className="flex-grow px-2 outline-none bg-transparent py-2"
				placeholder="Search"
			/>
		</form>
	);
}

export default Search;
