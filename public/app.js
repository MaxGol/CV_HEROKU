import React, { Component } from 'react';
import axios from 'axios';
import BasicInfo from './components/basicinfo';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {}
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);

  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data[0] });
    })
  }


  componentDidMount(){
    this.loadCommentsFromServer()
  };

  render() {
    console.log('BasicInfoApp in App', this.state.data);
    return (
      <div>
        <BasicInfo info = {this.state.data.basicinfo} />
      </div>
    )
  }
}

export default App;
