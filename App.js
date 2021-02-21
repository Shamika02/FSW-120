import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import "./index.css"
import Home from "./Home"
import About from "./About"
import ContactUs from "./ContactUs"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/contact us">Contact Us</Link><br></br>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Contact Us" component={ContactUs} />
            </Switch>
        </div>
    )
}

export default App
