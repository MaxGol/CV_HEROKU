import React from 'react';

const ExperienceItem = (props) => {

  const duty = props.work.duty.map(function(itemduty, index){
    return <li key={index}>{itemduty}</li>;
  });

  return(
    <div className="row work-info">
      <div className="col-xs-12">
        <h4>{ props.work.company }<span className="pull-right">{ props.work.time }</span></h4>
        <p>{ props.work.overview }</p>
        <h5><strong>{ props.work.jobtitle }</strong></h5>
        <ul>
          { duty }
        </ul>
      </div>
    </div>
  )

}

export default ExperienceItem;
