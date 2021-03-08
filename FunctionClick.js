import React from 'react'

function FunctionClick() {
    function clickHandler(){
      alert("Check Out My Heros Below")
    }
    
    return (
        <div>
         
            <button onClick= {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
