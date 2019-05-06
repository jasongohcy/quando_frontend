import React from "react";
import {Col, Row} from 'reactstrap';

import NavBar from '../components/NavBar'

class News extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
  }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2466d4e6910f4bd39aa356c82362350b')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                articles: myJson.articles
            });
        });
    }
   
    render() {
        console.log(this.state);
        return (
            <>
            {/* <div className="Spinner">
            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
            </div> */}
            <div className="NavBar">
            <NavBar/>
            </div>
            <div style={{margin: '2rem' }} >
            <h1>News portal</h1>
            <p>Latest investing news and finance headlines straight from Wall Street</p>
            </div>
            <div className="border">
            {this.state.articles.map((item,title) =>{
            return (
                <div key={title}>
                <Row style={{margin: '2rem' }}>
                    <Col sm="4">
                        <img alt="noimg" src={item.urlToImage} style={{width:'300px', height:'200px'}}/>
                    </Col>
                    <Col sm="8">
                        <h2 style={{textAlign:'left'}}> {item.title}</h2>
                        <br></br>
                        <p style={{textAlign:'left'}}>{item.content} <span><a href={item.url}>Read More</a></span></p>
                    </Col>
                </Row>
                </div>
                );
                })}
            </div>
            </>
        );
    }
}

export default News;

