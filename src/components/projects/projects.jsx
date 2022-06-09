import React from 'react';
import '../projects/projects.css';
import { projectList } from "../../components/projects/projectsList";
import { VscGithubAlt } from 'react-icons/vsc';



export default function Projects({img, link, title}) {
 
  return (

    <div className='container justify-content d-flex' id='project-card'>
      <div className="row">
        {projectList.map((data) => {
          return(
            <div className="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3">
              <div className='card'>
                <img src={data.src} variant="top" className="card-src" alt="card-images" />
                <div className="card-title"><h5>{data.title}</h5></div>
                <div className="card-links">
                <a href={data.deployedLink}> Deployed </a>|
                <a href={data.githubLink}> Github <VscGithubAlt size="1.3rem" color="#00090d" /></a>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>

    </div>
  )
 
}
