// import styles from './'


function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Insert the name of the project" />
            </div>
            <div>
                <input type="number" placeholder="Insert the total budget" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Select the category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project"/>
            </div>
             
        </form>
    )
}

export default ProjectForm