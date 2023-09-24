import React, { useState } from 'react'

const initState = {
  fname: 'Subham',
  lname: 'Sscorpio'
}
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState)
  const changeName = () => {
    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // setPerson(person)

    const newPerson = {...person}
    newPerson.fname = 'Clark'
    setPerson(newPerson)
  }
  console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
