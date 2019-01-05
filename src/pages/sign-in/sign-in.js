import React from 'react';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, Button} from 'react-bootstrap';
import { setUserName } from "../../actions/actions";

const SignIn = ({setUserName}) => {
  let userName;
  const handleInput = (e) => {
    userName = e.target.value;
  };

  const saveUserName = () => {
    setUserName(userName)
  };

  return(
    <div className='form_center'>
      <form>
        <ControlLabel>UserName</ControlLabel>
        <FormControl type='text' onChange={handleInput}/>
        <Button onClick={saveUserName}>Sign In</Button>
      </form>
    </div>
  )
};


export default connect(null, {setUserName})(SignIn);
