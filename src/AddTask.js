import React from 'react'
import { container, row, col, inputGroup, input, form } from 'react-bootstrap'; 
import {useState} from 'react'



const AddTask = ({onAdd}) => {
    const [eventName, setEvent] = useState('')
    const [day, setDay] = useState('')
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
    
        if(!eventName) {
            alert('Please add an event.')
            return
        }
    
        onAdd({eventName, text, day, reminder})

        setEvent('')
        setDay('')
        setText('')
        setReminder(false)
    
    }


  return (
    <form onSubmit = {onSubmit}>
        <div className="mb-3 mt-3">
        <label className="form-label">Event Name</label>
        <input type="text" className="form-control" placeholder="Event Name" value={eventName} onChange = {(e)=> setEvent(e.target.value)} />
        </div>

        <div className="mb-3">
        <label className="form-label">Date and Time</label>
        <input type="text" className="form-control" id="DataTime" placeholder="Date and Time" name="DateTime" value={day} onChange = {(e)=> setDay(e.target.value)} />
        </div>

        <label>Description</label>
            <textarea className="form-control" rows="5" id="comment" name="text" value={text} onChange = {(e)=> setText(e.target.value)}></textarea> 

        <div className="form-check mb-3">
        <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" checked = {reminder} value={reminder} onChange = {(e)=> setReminder(e.currentTarget.checked)}/> Remind me
        </label>
        </div>

       
        <button type="submit" className="btn btn-primary" value = "Save Task">Submit</button>
    </form>
  )
}

export default AddTask