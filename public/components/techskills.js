import React from 'react';
import SkillsList from './skillslist';

const TechSkills = (props) => {

  if(!props.info) {
    return <div></div>;
  }

  const skillList = Object.keys(props.info.skills_stack).map(function(skillname, index){
    return <SkillsList key={index} name={skillname} skills={props.info.skills_stack[skillname]} />
  })

  return(
    <div className="component-container">
      <div className="row">
        <div className="col-xs-12">
          <h4 className="section-title">{ props.info.title }</h4>
          <hr className="normal-divider" />

          { skillList }

        </div>
      </div>
    </div>
  )
}

export default TechSkills;
