import React, { useState } from 'react'

export default function  Like(props) {
    const [value, setValue] = useState(0)
  return <button onClick={()=>{setValue(value+1)}}>Like {props.name} {value}</button>
}
