import React from 'react';

const BasicInfo = (props) => {

    if(!props.info) {
      return <div>Loading <i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>;
    }

    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        html: true
      })
    })

    const tooltipText = "This CV has been build with MongoDB, Express, React and Node";

    return(
      <div className="component-container">
      <a href="/docs/Max__Golubev_CV.docx" className="download-icon" data-toggle="tooltip" data-placement="left" title="download cv.docx"><i className="fa fa-download fa-2x" aria-hidden="true"></i></a>
      <a className="info" href='https://github.com/MaxGol/CV_HEROKU' data-toggle="tooltip" data-placement="left" title={ tooltipText }><span className='fa fa-2x fa-github'></span></a>
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
