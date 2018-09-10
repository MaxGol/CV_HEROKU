import React from 'react';

const ExperienceItem = (props) => {

  const duty = props.work.duty.map(function(itemduty, index){
    return <li key={index}>{itemduty}</li>;
  });

  return(
    <div className="row work-info">
      <div className="col-xs-12 col-sm-3 exp-time"><strong>{ props.work.time }</strong></div>
      <div className="col-xs-12 col-sm-9">
        <h4>{ props.work.company }</h4>
        <p>{ props.work.overview }</p>
        <h5><strong>{ props.work.jobtitle }</strong></h5>
        <p>{ props.work.intro }</p>
        <ul>
          { duty }
        </ul>
      </div>
    </div>
  )

}

export default ExperienceItem;
