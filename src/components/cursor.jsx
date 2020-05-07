import React, { useEffect, useState, useRef } from 'react'
import { TweenMax } from 'gsap'
import styled, { css } from 'styled-components'
const Cursor = () => {
  const w = 24
  const h = 24
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isDisplay, setIsDisplay] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    window.document.addEventListener('mousemove', (e) => {
      setIsDisplay(true)
      setX(e.pageX - w / 2)
      setY(e.pageY - h / 2)
    })
  })
  TweenMax.to(ref.current, .001, {
    x, y
  })
  return (
    <>
    { isDisplay && (<Element ref={ref} x={x} y={y} w={w} h={h} />) }
    </>
  )
}

const Element = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  border-radius: 100%;
  background-color: #000;
  pointer-events: none;
  opacity: .4;
 `

export default Cursor


