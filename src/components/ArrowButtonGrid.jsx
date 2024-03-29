import React, {useRef} from 'react'
import ArrowButton from './ArrowButton'

const ArrowButtonGrid = ({pressedKey, setPressedKey, up, left, right, down}) => {
  
  return (
    <div className='arrow-buttons max-w-[180px] grid grid-cols-3 grid-rows-3 gap-1 m-auto '>
        <ArrowButton reff={up} direction={"ArrowUp"} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton reff={left} direction={"ArrowLeft"} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton reff={right} direction={"ArrowRight"} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton reff={down} direction={"ArrowDown"} pressedKey={pressedKey} setPressedKey={setPressedKey} />
    </div>
  )
}

export default ArrowButtonGrid