import actionTypes from './actionTypes';
import { getAllCodeService ,createNewUserService , getAllUsers , deleteUserService , editUserService , getTopDoctorHomeService} from '../../services/userService';
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch , getState) => {
        try {
            dispatch ({ type : actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }else {
                dispatch(fetchGenderFailed());
            }
        }catch(e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error' ,e);
            
        }
    }
}

// Gender
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

// Position
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

// Role
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})



export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
      console.log('fetchPositionFailed error', e)
    }
  }
}

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess (res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log('fetchPositionFailed error', e)
    }
  }
}

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data) ;
      console.log('tuandung2109 check create user redux: ', res);
      
      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed !")
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log('saveUserFailed error', e)
    }
  }
}


export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess (res.users.reverse()));
      } else {
        toast.error("Fetch all user error !")
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      toast.error("Fetch all user error !")

      dispatch(fetchAllUsersFailed());
      console.log('fetchAllUsersFailed error', e)
    }
  }
}

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data
})

export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILDED,
})

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId) ;      
      if (res && res.errCode === 0) {
        toast.success("Delete a new user succeed !")
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Delete the user error !")
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error("Delete the user error !")
      dispatch(deleteUserFailed());
      console.log('saveUserFailed error', e)
    }
  }
}

// export const deleteUserSuccess = () => {
//   type: actionTypes.DELETE_USER_SUCCESS
// }

// export const deleteUserFailed = () => {
//   type: actionTypes.DELETE_USER_FAILED
// }

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS
});

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED
});

export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log('Response from editUserService:', res); // Thêm dòng này để kiểm tra
      if (res && res.errCode === 0) {
        toast.success("Update the user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Update the user error!");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("Update the user error!");
      dispatch(editUserFailed());
      console.log('editUserFailed error', e);
    }
  }
}

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
        } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED:', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })
        }
    }
}