import React from 'react'
import { Link } from 'react-router-dom'

  

export const Navbar=()=> {

  const lnk=document.getElementsByClassName("link");
  for(var i=0; i<lnk.length;i++)
    {
      lnk[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active");
        if(current.length>0)
          {
            current[0].className=current[0].className.replace("active","");
          }
          this.className +=" active";
      });
    }


  return (
    <div className='nav'>
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/about">About Us</Link></li>
        <li><Link className="link" to="/services">Services</Link></li>
      </ul>
    </div>
  )
}


