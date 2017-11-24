import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

const Projects = (props) => {

  const options = {
      items: 4,
      nav: true,
      rewind: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: true
        },
        1000: {
          items: 4,
          nav: true
        }
      }
  };

  return (
    <div className="component-container">
      <div className="row">
        <div className="col-xs-12">
          <h4 className="section-title">Project</h4>
          <hr className="normal-divider" />
        </div>
        <div className="col-xs-12">
          <OwlCarousel options={options} >
            <div className="image-cor center-block"><a href="http://lemonademoney.com/home" target="_blank"><div className="inner-image-cor"><strong>Lemonade<br /> Money</strong></div></a></div>
            <div className="image-cor center-block"><a href="http://lemonadereward.com" target="_blank"><div className="inner-image-cor"><strong>Lemonade<br /> Reward</strong></div></a></div>
            <div className="image-cor center-block"><a href="http://lemonademoney.com/budget/income" target="_blank"><div className="inner-image-cor"><strong>Budget<br /> Calculator</strong></div></a></div>
            <div className="image-cor center-block"><a href="http://lemonademoney.com/financial-health-check/income" target="_blank"><div className="inner-image-cor"><strong>Financial<br /> Health</strong></div></a></div>
            <div className="image-cor center-block"><a href="http://siemens.lemonadereward.com/DIGITAL/PAGES/pension_modeller/" target="_blank"><div className="inner-image-cor"><strong>Pension<br /> Moduller</strong></div></a></div>
            <div className="image-cor center-block"><a href="http://lemonademoney.com/mortgage-app/which-property" target="_blank"><div className="inner-image-cor"><strong>Mortgage<br /> Calculator</strong></div></a></div>
            <div className="image-cor center-block"><a href="https://github.com/MaxGol/react-cards" target="_blank"><div className="inner-image-cor"><strong>Credit<br /> (React)</strong></div></a></div>
            <div className="image-cor center-block"><a href="https://github.com/MaxGol/CV_HEROKU" target="_blank"><div className="inner-image-cor"><strong>CV<br />(React)</strong></div></a></div>
            <div className="image-cor center-block"><a href="https://github.com/MaxGol/MERN" target="_blank"><div className="inner-image-cor"><strong>MERN<br /> (React)</strong></div></a></div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default Projects;
