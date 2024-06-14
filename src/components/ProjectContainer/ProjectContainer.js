import { useEffect } from 'react'
import gsap from 'gsap'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectContainer = ({ project }) => {

  gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      gsap.to('.project', {
        opacity: 1,
        y: -50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.project',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          // markers: true, // Enable markers for debugging
        },
      });
    }, []);
  
  return (
    <div className='project'>
      <h3>{project.name}</h3>

      <div className='project__image'>
        <img className='project__image' src={project.img} alt="Project" />
      </div>
      <p className='project__description'>
        {/* {project.description} */}
      </p>
    
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
