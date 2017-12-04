import React from 'react';

const Bio = (props) => {

  if(!props.info) {
    return <div></div>;
  }

  return(
    <div className="component-container">
      <div className="row">
        <div className="col-xs-12">
          <h4 className="section-title">{ props.info.title }</h4>
          <hr className="normal-divider" />
          <p>{ props.info.about_me }</p>
        </div>
      </div>
    </div>
  )
}

export default Bio;
