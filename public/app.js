import React, { Component } from 'react';
import axios from 'axios';
import BasicInfo from './components/basicinfo';
import Bio from './components/bio';
import TechSkills from './components/techskills';
import Experience from './components/experience';
import Projects from './components/projects';

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
    return (
      <div className="wrapper">
        <BasicInfo info = {this.state.data.basicinfo} />
        <Bio info = {this.state.data.bio} />
        <TechSkills info = {this.state.data.skills} />
        <Experience info = {this.state.data.experience} />
        <Projects info = {this.state.data.projects} />
      </div>
    )
  }
}

export default App;
