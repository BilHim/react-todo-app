import React from "react";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import { ViewListIcon, PlusIcon, HomeIcon } from "@heroicons/react/outline";

function Lists(props) {
	const newListTitleRef = React.useRef();

	function addListHandler(e) {
		e.preventDefault();

		const list = { id: uuid(), title: newListTitleRef.current.value };
		props.onAddList(list);

		newListTitleRef.current.value = "";
	}

	return (
		<div className="flex flex-col flex-grow overflow-auto p-6">
			<NavLink
				key="overview"
				to={"/"}
				exact
				className="flex w-full font-medium px-4 py-3 mb-1 rounded-lg text-black text-opacity-70 bg-black bg-opacity-0 hover:bg-opacity-5 hover:text-opacity-100 dark:bg-white dark:text-white dark:bg-opacity-0 dark:text-opacity-70 dark:hover:bg-opacity-10 dark:hover:text-opacity-100"
				activeClassName="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-90 hover:bg-opacity-20 dark:bg-blue-500 dark:bg-opacity-20 dark:text-blue-500 dark:text-opacity-90 dark:hover:bg-opacity-30"
			>
				<HomeIcon className="h-6 w-6 mr-3" />
				<div className="text-left flex-grow">Overview</div>
			</NavLink>
			{props.data.map((list) => (
				<NavLink
					key={list.id}
					to={"/" + list.id}
					className="flex w-full font-medium px-4 py-3 mb-1 rounded-lg text-black text-opacity-70 bg-black bg-opacity-0 hover:bg-opacity-5 hover:text-opacity-100 dark:bg-white dark:text-white dark:bg-opacity-0 dark:text-opacity-70 dark:hover:bg-opacity-10 dark:hover:text-opacity-100"
					activeClassName="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-90 hover:bg-opacity-20 dark:bg-blue-500 dark:bg-opacity-20 dark:text-blue-500 dark:text-opacity-90 dark:hover:bg-opacity-30"
				>
					<ViewListIcon className="h-6 w-6 mr-3" />
					<div className="text-left flex-grow">{list.title}</div>
				</NavLink>
			))}

			<form
				onSubmit={addListHandler}
				className="flex w-full font-medium px-4 py-3 rounded-lg bg-black bg-opacity-0 text-black text-opacity-70 opacity-70 hover:opacity-100 hover:bg-opacity-5 hover:text-opacity-90 focus-within:opacity-100 dark:bg-white dark:bg-opacity-0 dark:text-white dark:text-opacity-70 dark:focus-within:text-opacity-90 dark:hover:bg-opacity-10 dark:hover:text-opacity-90"
			>
				<button>
					<PlusIcon className="text-gray-500 h-6 w-6 mr-3" />
				</button>

				<input
					type="text"
					placeholder="New List"
					ref={newListTitleRef}
					className="text-left flex-grow outline-none bg-transparent"
				/>
			</form>
		</div>
	);
}

export default Lists;
