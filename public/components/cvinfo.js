import React from 'react';

const CVinfo = (props) => {

  if(!props.info) {
    return <div></div>;
  }

  return(
    <div className="component-container cvinfo">
      <p className="text-center">
        <small><span><i className="fa fa-info-circle" aria-hidden="true"></i></span> This CV was build with MongoDB, Express, React & Node.</small>
      </p>
    </div>
  );
};

export default CVinfo;
