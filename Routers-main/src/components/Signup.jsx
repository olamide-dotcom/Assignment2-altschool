
import React from 'react';
import './Sign.css';

class Signup extends React.Component {
  state = {
    disabled: true
  }
  enter = (e) => {
    if(e.target.value.length >= 6) {
      this.setState ({
        disabled: false
      });
    }
    else {
      this.setState({
        disabled: true
      })
    }
  }
  render() {
    return <div>
      <form>
      <input type="text" placeholder="Enter 6 characters or more"  onChange={this.enter}/><br/>
        <button disabled={this.state.disabled}>Sign in</button>
        </form>
      <h1>Access and Disabled button</h1>
      </div>
  }
}
export  default Signup;
