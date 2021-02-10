import React from "react"

function TodoItem(props) {

    function clickHandler(){
        console.log(props.item.imageName)
        console.log(props.item.catchPhrase)
    };
   


    
    return (
        <div className="todo-item">
            <button onClick ={clickHandler}>Main</button>
            <p>{props.item.name}</p>
            <p>{props.show}</p>
      
        </div>
    )
}

export default TodoItem