import React, {useRef, useEffect,useState} from 'react'
import './style/About.css'
import Transition from './Transition' 
import gsap from 'gsap'

const About = () => {
    const [showComponent, setShowComponent] = useState(false)
    const about = gsap.timeline();
    const abouth1 = useRef(null);
    const aboutimg = useRef(null); 
    useEffect(() =>{
        about.from(abouth1.current,{
            duration: .6 ,
            skewX:10,
            x: -100,
            opacity:0
        },"-=3.5")
        about.from(aboutimg.current,{
            duration:.5,
            y:-200,
            opacity:0
        },"-=3" )
        
        about.eventCallback("onComplete", () => {
          setShowComponent(true)
        })
      }, [about]) 
  return (
    <div> 
    <Transition timeline={about} onComplete={() => setShowComponent(true)}/>
    {showComponent && (
    <div>
      <div className="about-image about-overlay" ref={aboutimg}></div>
      <div className="container-about">
        <h1 ref={abouth1}>About Page</h1>
      </div>
    </div>  
    )}
</div>
  )
}

export default About