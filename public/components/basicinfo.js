import React from 'react';
import Slider from './slider';


const BasicInfo = (props) => {

    if(!props.info) {
      return <div className="text-center"><i className="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>;
    }

    return(
      <div className="component-container">
      <Slider />
        <div className="row">
          <div className="col-xs-12">
            <img src="/images/max.png" className="img-circle center-block" />
            <h4 className="text-center">{ props.info.name }</h4>
            <p className="text-center"><strong>{ props.info.title }</strong></p>
            <hr className="small-divider" />
            <p className="text-center"><strong>{ props.info.address }</strong></p>
            <p className="text-center"><strong>{ props.info.email }</strong></p>
            <hr className="small-divider" />
            <p className="text-center"><strong>07739 365430</strong></p>
          </div>
        </div>
      </div>
    );
  }

export default BasicInfo;
