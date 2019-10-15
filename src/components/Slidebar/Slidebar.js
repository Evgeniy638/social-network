import React from 'react';
import s from "./styleSlidebar.module.css"
import { NavLink } from "react-router-dom";

function Slidebar(props) {
     return (
          <div className={s.wrap}>
               <ul>
                    {props.arrayMenu.map(item => {
                         let path = `/${item.id}`

                         let userId = props.userId                        
                         if (item.id === "profile") {
                              path = `${path}/${userId}`
                         }

                         return (
                              <li key={item.id}>
                                   <NavLink
                                        to={path}
                                        activeClassName={s.active}
                                   >
                                        {item.text}
                                   </NavLink>
                              </li>)
                    })}
               </ul>
          </div>
     );
}

export default Slidebar;