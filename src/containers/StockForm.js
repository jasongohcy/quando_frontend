import React from 'react';
import {Button} from 'reactstrap';

const Form = props => (
  <form onSubmit={props.getStock} style={{ marginBottom:"2rem" }}>
    <input type="text" name="ticker"  placeholder="Example: AAPL" /> 
    <Button color="primary" style={{ marginLeft:"2rem" }}>Search</Button>
  </form>
);

export default Form