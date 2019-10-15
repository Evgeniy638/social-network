import React from "react"
import User from "./componentsUsers/User/User";
import Buttons from "./componentsUsers/Buttons/Buttons";
import Loader from "../../../assets/components/Loader/Loader";

const Users = (props) => {
     return (
          <>
               {props.isFetching ?<Loader/> :null}
               <div>
                    <Buttons
                         currentPage={props.currentPage}
                         numberOfPages={props.numberOfPages}
                         getNewUsers={props.getNewUsers}
                    />

                    {props.users.map(item =>
                         <User
                              avatarImg={item.avatarImg}
                              id={item.userId}
                              key={item.userId}
                              name={item.name}
                              city={item.location.city}
                              status={item.status}
                              country={item.location.country}
                              following={props.following}
                              disabledButtons={props.disabledButtons}
                              followThunkCreator={props.followThunkCreator}
                              unfollowThunkCreator={props.unfollowThunkCreator}
                              userId={props.userId}
                              isLoggedIn={props.isLoggedIn}
                         />
                    )}
               </div>
          </>
     )
}

export default Users