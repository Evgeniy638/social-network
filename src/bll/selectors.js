export const getCountry = (state) => {
     const location = state.stateProfile.userData.location

     return (location) ?location.country :""
}

export const getCity = (state) => {
     const location = state.stateProfile.userData.location

     return (location) ?location.city :""
}

export const getUserId = (state) => state.stateLoginUser.userId

export const getName = (state) => state.stateProfile.userData.name

export const getSurname = (state) => state.stateProfile.userData.surname

export const getIsLoggedIn = (state) => state.stateLoginUser.isLoggedIn

export const getAvatarImg = (state) => state.stateProfile.userData.avatarImg

export const getAvatarImgLoginUser = (state) => state.stateLoginUser.avatarImg