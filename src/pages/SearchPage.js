import { useParams } from "react-router-dom";
import Task from "../components/Task";

function SearchPage(props) {
    const { query } = useParams();

    const tasks = props.tasks.filter((task) =>
        task.text.toLowerCase().includes(query.trim().toLowerCase())
    );
    const totalTasksCount = tasks.length;

    return (
        <div className="flex flex-col dark:text-white">
            <div className="flex flex-row items-center mb-2">
                <div className="w-4 h-4 ml-2 mr-4">
                    <div className="w-full h-full bg-blue-500 rounded"></div>
                </div>

                <h1 className="text-3xl border-b-4 border-transparent font-medium flex-grow">
                    Search for <span className="text-blue-500">{query}</span>
                </h1>
            </div>
            <div className="flex flex-col my-4">
                {totalTasksCount === 0 && <div>No tasks founds.</div>}

                {tasks.map((task) => (
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

export default SearchPage;
