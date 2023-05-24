import React, {useRef, useEffect,useState} from 'react'
import './style/Home.css'
import Transition from './Transition'
import gsap from 'gsap';
const Home = () => {
  const [showComponent, setShowComponent] = useState(false)
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);
  useEffect(() =>{
    home.from(homeh1.current,{
        duration: .6 ,
        skewX:10,
        x: -100,
        opacity:0
    },"-=3.5")
    home.from(homeimg.current,{
        duration:.5,
        y:-200,
        opacity:0
    },"-=3" )

    home.eventCallback("onComplete", () => {
        setShowComponent(true)
    })
  }, [home]) 
  return (
    <div>
        <Transition timeline={home} onComplete={() => setShowComponent(true)}/>
        {showComponent && (
        <div>
            <div className="home-image home-overlay" ref={homeimg}></div>
            <div className="container-home">
                <h1 ref={homeh1}>Home Page</h1>
            </div>
        </div>           
        )}
    </div>
  )
}

export default Home