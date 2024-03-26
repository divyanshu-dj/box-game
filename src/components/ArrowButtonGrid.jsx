import React from 'react'
import ArrowButton from './ArrowButton'

const ArrowButtonGrid = ({pressedKey, setPressedKey}) => {
  return (
    <div className='arrow-buttons grid grid-cols-3 grid-rows-3 gap-1'>
        <ArrowButton direction={"ArrowUp"} positionInGrid={{row:1, col:2}} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton direction={"ArrowLeft"} positionInGrid={{row:2, col:1}} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton direction={"ArrowRight"} positionInGrid={{row:2, col:3}} pressedKey={pressedKey} setPressedKey={setPressedKey} />
        <ArrowButton direction={"ArrowDown"} positionInGrid={{row:3, col:2}} pressedKey={pressedKey} setPressedKey={setPressedKey} />
    </div>
  )
}

export default ArrowButtonGrid