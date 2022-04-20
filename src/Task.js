import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle }) => {
    return (
        <div className = {`p-5 mb-5 ${task.reminder? 'border-start border-success':''} `} style = {{backgroundColor:'white'}} onClick = {() => onToggle(task.id)} >
            <h3>
                {task.text} <FaTimes className="float-end" style = {{color: 'red' , cursor: 'pointer'}} 
            onClick = {() => onDelete(task.id)}
            
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
