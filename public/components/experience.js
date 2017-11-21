import React from 'react';
import ExperienceItem from './experienselist';


const Experience = (props) => {

  console.log(props.info);

  if(!props.info) {
    return <div><i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>;
  }

  const experienceListItem = props.info.work.map(function(item, index){
    return <ExperienceItem key={index} work={item} />
  });

  return(
    <div className="component-container">
      <div className="row">
        <div className="col-xs-12">
          <h4 className="section-title">{ props.info.title }</h4>
          <hr className="normal-divider" />

          { experienceListItem }

        </div>
      </div>
    </div>
  )
}

export default Experience;
