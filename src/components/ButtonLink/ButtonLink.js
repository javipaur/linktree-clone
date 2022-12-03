import React from 'react';
import './buttonLink.scss';


const ButtonLink = ({text,link,icon}) => {
  return (
    <>
    <a className="title" href={link}>
           <div className='icon'></div>
           <p>{text}</p>
           <div className='title-img'>{icon}</div> 
        </a>
    </>
  )
}
export default ButtonLink;
