import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import styles from './Projects.module.css'
import Container from '../layout/Container'
// import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

function Projects() {
  const [projects, setProjects] = useState([])
  // const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectsMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProjects(data)
          // setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 300)
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:3000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectsMessage('Project removed with sucess!')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Projects</h1>
        <LinkButton to="/newproject" text="Create Project" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      {projectMessage && <Message type="sucess" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {/* {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>There are no projects registered!</p> */}
        )}
      </Container>
    </div>
  )
}

export default Projects