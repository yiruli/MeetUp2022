import React from 'react'
import bing from './bingbing.jpg'

const GuestLayout = () => {
    return (
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
}

export default GuestLayout
