import React, {useRef, useEffect, useState} from 'react'
import './style/Contact.css'
import Transition from './Transition' 
import gsap from 'gsap'

const Contact = () => {
  const [showComponent, setShowComponent] = useState(false)
  const contact = gsap.timeline();
  const contacth1 = useRef(null);
  const contactimg = useRef(null); 
  useEffect(() =>{
      contact.from(contacth1.current,{
          duration: .6 ,
          skewX:10,
          x: -100,
          opacity:0
      },"-=3.5")
      contact.from(contactimg.current,{
          duration:.5,
          y:-200,
          opacity:0
      },"-=3" )

      contact.eventCallback("onComplete", () => {
        setShowComponent(true)
      })
    }, [contact]) 
    return (
      <div>
        <Transition timeline={contact} onComplete={() => setShowComponent(true)} />
        {showComponent && (
          <div>
            <div className="contact-image contact-overlay" ref={contactimg}></div>
            <div className="container-contact">
              <h1 ref={contacth1}>Contact Page</h1>
            </div>
          </div>
        )}
      </div>
    )
  }

export default Contact