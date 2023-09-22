import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ btnText }){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/categories", {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form}>
            <Input 
            type="text"
            text="Project Name"
            name="name"
            placeholder="Insert the Project name"
            />

            <Input
            type="number" 
            text="Project Budget"
            name="budget"
            placeholder="Insert the total budget"
            />

            <Select 
            name="category_id"
            text="Select the category"
            options={categories}
            />

            <SubmitButton text={btnText}/>
             
        </form>
    )
}

export default ProjectForm