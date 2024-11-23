import React, { useState } from 'react'

export default function Header() {
  const [count,setCount]=useState(0)
  function handleClick(){
    alert('you clicked me !')
    setCount(count+1)}
 const products= [
  {title:"ps4",id:1,is_a_console:true},
  {title:"xbox",id:2,is_a_console:true},
  {title:"pc",id:3,is_a_console:false},
 
 ]
 

//  const listitems = products.map(element=>
// <li key={element.id} style={{color:element.is_a_console?'green':'red' }} >
  
//   {element.title}</li>
//  );
 


  


  return (
    <div><h1> the header from cris mohammed ali  </h1>
  
  <Mybtn count={count} onClick={handleClick}/>
  <Mybtn count={count} onClick={handleClick}/>
 
    {/* <ul>
    {listitems}
    </ul> */}
    </div>
  )}
  function Mybtn({count,onClick}) {
  
    return(
      <button onClick={onClick}>click me
    you have now clicked me {count} times
    </button>
    )
      
       }
