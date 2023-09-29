import React, { useState } from 'react';
import { navbarItems } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav style={{width:'100%', background:'teal', padding:'20px 0px' , display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:'center', flexDirection:'row', padding:'20px'}}>
        <h1 style={{color:'white'}}>My Awesome Website</h1>
      </div>

      <ul style={{display:'flex', listStyle:'none', alignItems:'center', justifyContent:'center', gap:'20px', padding:'0px 30px'}}>
          {
        navbarItems.map(item => (

        <li key={item.id} style={{padding:'15px', border:'none'}}>
          <Link to={item.path} style={{color:'white', border:'none', fontSize:'24px'}}>
            {item.title}
          </Link>
        </li>

          ))
          }
      </ul>
    </nav>
  );
};

export default Navbar;
