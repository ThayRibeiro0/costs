import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project(){
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjecForm, setShowProjectForm] = useState(false)
    
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

    function toggleProjectForm() {
        setShowProjectForm(!showProjecForm)
    }

    return (<>
        {project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
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
                            <p>Form</p>
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