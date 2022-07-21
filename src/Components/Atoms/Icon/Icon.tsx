import React from 'react'




interface Props{
   src:string
}

function Icon(props:Props) {
  return (
  
        <img src={props.src} alt='icon' />
   
  )
}

export default Icon




