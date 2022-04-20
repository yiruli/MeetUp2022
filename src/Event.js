import React from 'react'
import Button from './Button'
import { container, row, col, inputGroup, input } from 'react-bootstrap'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Upcoming from './Upcoming';
import Past from './Past';
import AddEvent from './AddEvent';
import AddTask from './AddTask';
import {useState} from 'react'


const Event = ({tasks, onDelete, onToggle, onAdd}) => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [showUpcoming, setShowUpcoming] = useState(true)
    const [showPast, setShowPast] = useState(false)

    const onAddEvent = () => {
        setShowAddTask(true)
        setShowUpcoming(false)
        setShowPast(false)
    }

    const onUpcoming = () => {
        setShowAddTask(false)
        setShowUpcoming(true)
        setShowPast(false)
    }

    const onPast = () => {
        setShowAddTask(false)
        setShowUpcoming(false)
        setShowPast(true)
    }


    return (
        
        <div class="container-fluid bg-light">   
            <div class="container p-5">
                          <div class="row">
                              <div class="col-md-4">
                                    <div class="container p-5 me-5 mb-5" style = {{backgroundColor:'white'}} >
                                        <div class="p-1" onClick = {onUpcoming} style = {{ color: showUpcoming? 'green' : 'black' , cursor: 'pointer'}} >Upcoming Events</div>
                                        <div class="p-1" onClick = {onPast} style = {{ color: showPast? 'green' : 'black' , cursor: 'pointer'}} >Past Events</div>
                                        <div class="p-1" onClick = {onAddEvent} style = {{ color: showAddTask? 'green' : 'black' , cursor: 'pointer'}} >Add an Event</div>
                                    </div>

                                    {/* <Button color='blue' text='Add Event' /> */}
                              </div>
                              <div class="col-md-8">
                                {showAddTask && <AddTask onAdd = {onAdd}/>}
                                { showUpcoming && (tasks.length > 0 ? (<Upcoming tasks ={tasks} onDelete = {onDelete} onToggle = {onToggle} />) : ('No event to show.'))}
                                { showPast && <Past />}
                              </div>
                          </div>
            </div>
        </div> 
       
      
    )
}

export default Event
