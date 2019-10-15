import React from "react";
import s from "./styleInfByUser.module.css"
import StatusContainer from "./components/Status/StatusContainer";
import { NavLink } from "react-router-dom"
import NameContainer from "./components/Name/NameContainer";
import SurnameContainer from "./components/Surname/SurnameContainer";
import CityContainer from "./components/City/CityContainer";
import CountryContainer from "./components/Country/CountryContainer";
import AvatarImgContainer from "./components/AvatarImg/AvatarImgContainer";

const InfByUser = React.memo((props) => {
     return (
          <div className={s.wrap}>
               <AvatarImgContainer className={s.avatar}/>

               <div className={s.nameAndSurname}>
                    <NameContainer/>
                    <SurnameContainer/>
               </div>

               <div className={s.location}>
                    <CityContainer/>
                    <CountryContainer/>
               </div>

               <StatusContainer className={s.status}/>

               {props.isnotUserProfile && <NavLink 
                    to={`/dialogs/${props.userId}`} 
                    onClick={props.createNewDialog}
                    className={s.writeMessage}
               ><button>Написать сообщение</button></NavLink>}
          </div>
     )
})

export default InfByUser;