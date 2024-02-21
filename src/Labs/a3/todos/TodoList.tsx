import TodoItem from "./TodoItems";
import todo from "./todo.json";
const TodoList=()=>{
    return(
        <>
        <h3>Todo List</h3>
        <ul className="List-group">
            {
                todo.map(todo=>{
                    return(<TodoItem todo={todo}/>)
                })
            }
        </ul>
        </>
    );
};
export default TodoList;