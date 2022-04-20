import logo from './logo.svg';
import bing from './bingbing.jpg'
import './App.css';
import { container, row, col, inputGroup, input } from 'react-bootstrap'; 
import Footer from './Footer'
import About from './About'
import GuestLayout from './GuestLayout'
import Event from './Event'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useState} from 'react'

function App() {

  

  const [tasks, setTasks] = useState([
          { 
              id:1,
              eventName: 'Vibrant Morning Yoga',
              text: 'MONDAY: warming Hatha Flow (w/Miku)',
              day:'Monday, April 18, 2022 8:00 AM to 9:00 AM PDT',
              reminder: true
          },
          {
              id:2,
              eventName: 'Vibrant Morning Yoga',
              text: 'TUESDAY: foundations Hatha Yoga class (w/ Megan)',
              day:'Tuesday, April 19, 2022 8:00 AM to 9:00 AM PDT',
              reminder: true
          },
          {
              id:3,
              eventName: 'Vibrant Morning Yoga',
              text: 'WEDNESDAY: upbeat Ashtanga (w/Miku)',
              day:'Wednesday, April 20, 2022 8:00 AM to 9:00 AM PDT',
              reminder: true
          },
          { 
            id:4,
            eventName: 'Vibrant Morning Yoga',
            text: 'MONDAY: warming Hatha Flow (w/Miku)',
            day:'Monday, April 18, 2022 8:00 AM to 9:00 AM PDT',
            reminder: true
        },
        {
            id:5,
            eventName: 'Vibrant Morning Yoga',
            text: 'TUESDAY: foundations Hatha Yoga class (w/ Megan)',
            day:'Tuesday, April 19, 2022 8:00 AM to 9:00 AM PDT',
            reminder: true
        },
        {
            id:6,
            eventName: 'Vibrant Morning Yoga',
            text: 'WEDNESDAY: upbeat Ashtanga (w/Miku)',
            day:'Wednesday, April 20, 2022 8:00 AM to 9:00 AM PDT',
            reminder: true
        },
        { 
          id:7,
          eventName: 'Vibrant Morning Yoga',
          text: 'MONDAY: warming Hatha Flow (w/Miku)',
          day:'Monday, April 18, 2022 8:00 AM to 9:00 AM PDT',
          reminder: true
      },
      {
          id:8,
          eventName: 'Vibrant Morning Yoga',
          text: 'TUESDAY: foundations Hatha Yoga class (w/ Megan)',
          day:'Tuesday, April 19, 2022 8:00 AM to 9:00 AM PDT',
          reminder: true
      },
      {
          id:9,
          eventName: 'Vibrant Morning Yoga',
          text: 'WEDNESDAY: upbeat Ashtanga (w/Miku)',
          day:'Wednesday, April 20, 2022 8:00 AM to 9:00 AM PDT',
          reminder: true
      },
      { 
        id:10,
        eventName: 'Vibrant Morning Yoga',
        text: 'MONDAY: warming Hatha Flow (w/Miku)',
        day:'Monday, April 18, 2022 8:00 AM to 9:00 AM PDT',
        reminder: true
    },
    {
        id:11,
        eventName: 'Vibrant Morning Yoga',
        text: 'TUESDAY: foundations Hatha Yoga class (w/ Megan)',
        day:'Tuesday, April 19, 2022 8:00 AM to 9:00 AM PDT',
        reminder: true
    },
    {
        id:12,
        eventName: 'Vibrant Morning Yoga',
        text: 'WEDNESDAY: upbeat Ashtanga (w/Miku)',
        day:'Wednesday, April 20, 2022 8:00 AM to 9:00 AM PDT',
        reminder: true
    }

]
)

  const addTask = (task) => {
      const id = Math.floor(Math.random*1000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
  }

  const deletTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) =>
        task.id === id? {
            ...task, reminder : !task.reminder
        }: task

        )
      )
  }

  return (
    <BrowserRouter>
    <>
          <div class="container-fluid p-3 border">
            <div class="row">
                <div class="col">
                      <h1 class ="text-success">LoveGreenGuide</h1>
                </div> 

                <div class="col">
                      <div className="input-group pt-2">
                        <input type="text" className="form-control" placeholder="Search"></input>
                        <button className="btn btn-success" type="submit">Go</button>
                      </div>
                </div>         
                    
                <div class="col">
                       <img src={bing} className="rounded-circle float-end" alt="logo" height="60px" width="60px" />
                </div>
            </div>
          </div>

          <div class="container-fluid border">
            <div class="container ps-5 py-3">
                          <div class="row">
                              <div class="col">
                                <img src={logo} className="App-logo" alt="logo" />
                              </div>
                              <div class="col">
                                <h1>道 Vibrantly Seattle | Yoga & Mindful Movement Meetup! ♥</h1>
                                <p>Seattle, WA</p>
                                <p>168 Members. Public Group</p>
                                <p>Organized by BingBing</p>
                              </div>
                          </div>
            </div>
          </div>

          <div class="container ps-5 py-3">
                          <div class="row">
                                    <div class="col-md-7">
                                              <div class="row">
                                                      {/* <div class="col-sm-2"><a href='/about'>About</a></div>   */}
                                                      <div class="col"><Link to ='/about' style={{ textDecoration: 'none' }}>About</Link></div> 
                                                      <div class="col"><Link to ='/event' style={{ textDecoration: 'none' }}>Events</Link></div>                                     
                                                      {/* <div class="col-sm-2"><a href='/event'>Events</a></div> */}
                                                      <div class="col">Photos</div>
                                                      <div class="col">Members</div>
                                                      <div class="col">Discussions</div>
                                                      <div class="col">More</div>
                                              </div>
                                    </div>
                                    <div class="col-md-5">
                                      
                                    </div>
                          </div>
          </div>

           


            {/* <div className="container-fluid bg-light">
                <div className="container p-3">
                              <div className="row">
                                  <div className="col">
                                        <Route path='/about' component={About}/> 
                                  </div>
                              </div>
                </div>
            </div>
 */}

                
               
          <Routes>
                <Route path="/" element={<GuestLayout />}/>
                <Route path='/about' element={<About />}/> 
                <Route path='/event' element={<Event tasks = {tasks} onDelete = {deletTask} onToggle = {toggleReminder} onAdd ={addTask} />}/> 
          </Routes>
          
          {/* <Routes>
          {<Route path = '/' exact render = { (props) => (
            <>
                <div class="container-fluid bg-light">
                      <div class="container p-3">
                              <div class="row">
                                  <div class="col">
                                    <h3>What we are about?</h3>
                                    <p>We are a group of playful, vibrant, curious and amazing humans (just like you!). Exploring compassionate movement and relating from centered-ness. This looks like yoga asana (hatha flow, restorative, and vinyasa), walking meditation, laughter yoga, mindful movement, braindance and connection to nature (since we practice in the park!).</p>
                                    <h3>Upcoming Event</h3>
                                  </div>
                                  <div class="col">
                                    <h3>Organizers</h3>
                                    <img src={bing} className="rounded-circle" alt="logo" height="60px" width="60px" />
                                    
                                    <h3>Members</h3>
                                    <img src={bing} className="rounded-circle" alt="logo" height="60px" width="60px" />
                                  </div>
                              </div>
                      </div>
                </div>
            </>
          )

          } />}

                
          </Routes>
           */}
         
          
    </>
    </BrowserRouter>
  );
}

export default App;
