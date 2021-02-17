import React from 'react';
import './App.css';


function App() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('Thank you your responses have been recorded.')
 }
  
  return (
    
    <div className="wrapper">
          <h3>My App</h3>
         
        <form  onSubmit={handleSubmit}>
            <input type="text" Placeholder="First Name:" minlength = "3"required/>
            <input type="text" Placeholder= "Last Name:" minlength = "3"required/>
            <br/>
            <br/>
            <input type="text" Placeholder="Email;" minlength = "3"required/>
            <input type="text" Placeholder="Place of Birth:" minlength = "3"required/>
            <br/>
            <br/>
            <input type="number" Placeholder="Phone Number:"minlength = "3"required/>
            <input type="text" Placeholder="Favorite Food:" minlength = "3"required/>
            <br/>
            <br/>  
            <input type="text" Placeholder= "Tell us about yourself" style={{width:"350px", height:"100px"}}minlength = "3"required/>
            <br/>
            <br/> 
            
            <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default App;
























