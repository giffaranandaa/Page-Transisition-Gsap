import React, {useRef, useEffect} from 'react'
import gsap, {Quint} from 'gsap'
import './style/Transition.css'

const Transition = ( { timeline,onComplete } ) => {
  const trans = useRef(null)
  useEffect(() => {
    timeline.to(trans.current,{
        duration: 4,
        x: 3600,
        ease: Quint,
        onComplate: onComplete
    })
  }, [timeline, onComplete])
  return (
    <div>
        <div className="transition-effect" ref={trans}></div>
    </div>
  )
}

export default Transition