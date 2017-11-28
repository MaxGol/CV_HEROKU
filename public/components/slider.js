import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }

    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        html: true
      })
    })

    this.tooltipText = "This CV has been build with MongoDB, Express, React and Node";
  }

  togglingSlider = () => {
    const toggledIsOpen = !this.state.isOpen;
    this.setState({ isOpen: toggledIsOpen });
  }

  render(){
    return(
      <div className={ "slider-menu " + ( this.state.isOpen ? 'on' : 'off' ) }>
        <a href="/docs/Max__Golubev_CV.docx" className="slider-icon"><i className="fa fa-download fa-2x" aria-hidden="true"></i></a>
        <a className="slider-icon" href='https://github.com/MaxGol'><i className="fa fa-github-alt fa-2x" aria-hidden="true"></i></a>
        <a className="slider-icon" href='mailto:golubev.maksim@gmail.com'><i className="fa fa-2x fa-envelope" aria-hidden="true"></i></a>
        <div onClick={ this.togglingSlider } className="btn-slider"><i className="fa fa-1x fa-chevron-down" aria-hidden="true"></i></div>
      </div>
    );
  };
};
