import React from "react"
import FunctionClick from "./FunctionClick"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import"./App.css"

function App() {
    const TodoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
        <div className="todo-list">
            <h1>My Superheros</h1>
            
            <FunctionClick></FunctionClick>
            {TodoItems}
            
        </div>
    )
}

export default App