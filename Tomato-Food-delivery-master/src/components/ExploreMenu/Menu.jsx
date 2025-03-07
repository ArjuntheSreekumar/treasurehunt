import React from 'react';
import { menu_list } from '../../assets/assets';
import './Menu.css';

const Menu = ({category,setCategory}) => {
  return (
<div className="clues" id="clues">
    <h1></h1>
    <div className="clues-list">
      {menu_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className="clues-list-item">
            <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
       
          )
      })}
    </div>
    <hr></hr>
</div>
  )
}

export default Menu