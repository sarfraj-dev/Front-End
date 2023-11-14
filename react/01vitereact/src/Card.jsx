import React from 'react'
import First from './components/First'

function Card() {
    let obj={
        userName:"sarfraj",
        age:22
    }
    
  return (
    <>
    <First name="sarfraj" someObj={obj} position="student"/>
    <First name="salar" position="work"/>
</>
  )
}

export default Card
