import React from 'react';

const SkillsList = (props) => {

  if(!props.skills) {
    return <div><i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>;
  }

  const skillsItems = props.skills.map(function(item){
    if(props.skills.indexOf(item) === props.skills.length-1){
      return item;
    } else {
      return item + ', ';
    }
  });

  return(
    <div className="row">
      <div className="col-sm-2 text-right"><strong>{props.name}:</strong></div>
      <div className="col-sm-10">{skillsItems}</div>
    </div>
  )
}

export default SkillsList;
