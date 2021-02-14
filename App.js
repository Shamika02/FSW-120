
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
          
            <form>
              <h2>My List</h2>
                <input type="text" name="firstName" placeholder="firstName"onChange={this.handleChange} />
                <br />
                <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange} />
                <ol>{this.state.firstName} {this.state.lastName}
                </ol>
                <input type='button' onclick='addText()' value='Add To List'/>
            </form>
            
        )
    }
}

export default App