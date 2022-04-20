import React from 'react'
import Task from './Task'



const Upcoming = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            <p>Upcoming!</p>
            {tasks.map( (task) => (
                <Task key={task.id} task ={task} onDelete= {onDelete} onToggle = {onToggle} />
            )

            )}
        </>
    )
}

export default Upcoming
