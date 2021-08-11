import {
	isToday,
	isTomorrow,
	isThisWeek,
	isNextWeek,
	dueDateCompare,
} from "../helpers/dueDate";
import Task from "../components/Task";

function OverviewPage(props) {
	const todayTasks = props.tasks.filter(
		(task) => task.dueDate && isToday(task.dueDate)
	);
	const tomorrowTasks = props.tasks.filter(
		(task) => task.dueDate && isTomorrow(task.dueDate)
	);
	const thisWeekTasks = props.tasks
		.filter((task) => task.dueDate && isThisWeek(task.dueDate))
		.sort(dueDateCompare);
	const nextWeekTasks = props.tasks
		.filter((task) => task.dueDate && isNextWeek(task.dueDate))
		.sort(dueDateCompare);

	const totalTasksCount =
		todayTasks.length +
		tomorrowTasks.length +
		thisWeekTasks.length +
		nextWeekTasks.length;

	return (
		<div className="flex flex-col dark:text-white">
			<div className="flex flex-row items-center mb-2">
				<div className="w-4 h-4 ml-2 mr-4">
					<div className="w-full h-full bg-blue-500 rounded"></div>
				</div>

				<h1 className="text-3xl border-b-4 border-transparent font-medium flex-grow ">
					Overview
				</h1>
			</div>
			<div className="flex flex-col my-4">
				{totalTasksCount === 0 && (
					<div>
						You have no tasks scheduled for the upcoming two weeks.
					</div>
				)}

				{todayTasks.length > 0 && (
					<div className="font-medium text-lg mt-3">Today</div>
				)}

				{todayTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onEdit={props.onEditTask}
						onRemove={props.onRemoveTask}
					/>
				))}

				{tomorrowTasks.length > 0 && (
					<div className="font-medium text-lg mt-3">Tomorrow</div>
				)}

				{tomorrowTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onEdit={props.onEditTask}
						onRemove={props.onRemoveTask}
					/>
				))}

				{thisWeekTasks.length > 0 && (
					<div className="font-medium text-lg mt-3">This Week</div>
				)}

				{thisWeekTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onEdit={props.onEditTask}
						onRemove={props.onRemoveTask}
					/>
				))}

				{nextWeekTasks.length > 0 && (
					<div className="font-medium text-lg mt-3">Next Week</div>
				)}

				{nextWeekTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						onEdit={props.onEditTask}
						onRemove={props.onRemoveTask}
					/>
				))}
			</div>
		</div>
	);
}

export default OverviewPage;
