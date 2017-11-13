import React from 'react';

const BasicInfo = (props) => {

    if(!props.info) {
      return <div>Loading <i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>;
    }

    return(
      <div>
        <div>{ props.info.name } <i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>
        <div className="row">

        </div>
      </div>
    );
  }

export default BasicInfo;
