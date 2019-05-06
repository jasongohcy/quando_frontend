import React, { Component } from 'react';
import {  Table} from 'reactstrap';

import Form from "../containers/StockForm.js";

import NavBar from '../components/NavBar'

const API_KEY = "eSr7XtBu8WZwKcLg6RQsVNY2b3npmFQf5xIceg0pWZjiQDsiHkUVd0VDWfCC";

class Stock extends Component {
  state = {
    data: []
  }
  getStock = async (e) => {
    const ticker = e.target.elements.ticker.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.worldtradingdata.com/api/v1/stock?symbol=${ticker}&api_token=${API_KEY}`);
    
    const data = await api_call.json();
    this.setState({ data: data.data });
  }
 


  render() {
    return (
      <div className="App">
        <div className="NavBar">
        <NavBar/>
        </div>
        <header>
          <h1 style={{marginTop:'2rem'}}>Stock Search</h1>
          <hr></hr>
        </header>
        <Form getStock={this.getStock}></Form>
        {this.state.data.map((item,name) =>{
            return (
            <Table style={{width:"100%"}}key={name}>
            <thead>
            <tr>
                <th>Stock</th>
                <th>Open Price</th>
                <th>Close Price</th>
                <th>change_pct</th>
                <th>Volume</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{item.name}</th>
                <td>{item.price}</td>
                <td>{item.close_yesterday}</td>
                <td>{item.change_pct}%</td>
                <td>{item.volume}</td>
            </tr>
            </tbody>
            </Table>
            );
        })}
      </div>

    );
  }
}

export default Stock;