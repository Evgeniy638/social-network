import React from 'react';
import s from "./styleProfile.module.css";
import InfByUserContainer from './componentsProfile/InformationByUser/InfByUserContainer.js';
import PostsContainer from './componentsProfile/Posts/PostsContainer';
import NewPostContainer from './componentsProfile/newPost/NewPostContainer.js';
import Loader from '../../../assets/components/Loader/Loader'
import { Redirect } from "react-router-dom"

function Profile(props) {
     if (props.match.params.id === "undefined") return <Redirect to="/login"/>
     
     return (
          <div className={s.wrap}>
               {props.isFetching ?<Loader/> :null}
               <InfByUserContainer/>
               <NewPostContainer/>
               <PostsContainer/>
          </div>
     );
}

export default Profile;