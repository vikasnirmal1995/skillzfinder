export const userData = (data) => {
  //   console.log("abhi>>>", data);
  return {
    type: "SAVE_USER_DATA",
    payload: data,
  };
};
export const userLocationUpdate = (data) => {
  //   console.log("abhi>>>", data);
  return {
    type: "UPDATE_USER_LOCATION",
    payload: data,
  };
};

//This function is foer finding all the skillers

export const userSearchedSkillers = (data) => {
  return {
    type: "GET_ALL_SKILLERS",
    payload: data,
  };
};

export const userLikedSkillers = (data) => {
  return {
    type: "GET_ALL_LIKED_SKILLERS",
    payload: data,
  };
};

export const logOutSkiller = (data) => {
  return {
    type: "LOG_OUT_SKILLER",
    payload: null,
  };
};

export const saveIpAddress = (data) => {
  return {
    type: "GET_IP_ADDRESS",
    payload: data,
  };
};
