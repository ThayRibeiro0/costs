import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'

function Project(){
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjecForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8080/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
        })
        .catch(err => console.log)
        }, 300)
    }, [id])

    function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            setMessage('The budget cannot be less than the project cost!')
            setType('error')
            return false
        }
       
        fetch(`http://localhost:8080/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
       })
       .then(resp => resp.json())
       .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Project updated')
            setType('sucess')
       })
       .catch(err => console.log(err))
    }


    function toggleProjectForm() {
        setShowProjectForm(!showProjecForm)
    }

    return (<>
        {project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message}/>}
                <div className={styles.details_container}>
                    <h1>Project: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjecForm ? 'Edite project' : 'Close'}
                    </button>
                    {!showProjecForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Category:</span> {project.category.name}
                            </p>
                            <p>
                                <span>Total Budget:</span> U${project.budget}
                            </p>
                            <p>
                                <span>Total Used:</span> U${project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <ProjectForm 
                                handleSubmit={editPost} 
                                btnText="Finish edition" 
                                projectData={project}
                            />
                        </div>
                    )}
                </div>
            </Container>
        </div>
        ) : (
            <Loading/>
        )}
    </>)
}

export default Project