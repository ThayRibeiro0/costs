// import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'



function ServiceForm({ handleSubmit, btnText, projectData}) {
    
    function submit(){
    
    }

    function handleOnChange(e){
    
    }

  return ( 
    <form onSubmit={submit} className={styles.form}>
        <Input 
        type="text"
        text="Service Name"
        name="name"
        placeholder="Insert the service's name"
        handleOnChange={handleOnChange}
        />
        <Input 
        type="number"
        text="Service Budget"
        name="cost"
        placeholder="Insert the Total"
        handleOnChange={handleOnChange}
        />
        <Input 
        type="text"
        text="Service Description"
        name="description"
        placeholder="Insert the service's description"
        handleOnChange={handleOnChange}
        />
        <SubmitButton 
        text={btnText}
        />
    </form>
  )
}

export default ServiceForm
