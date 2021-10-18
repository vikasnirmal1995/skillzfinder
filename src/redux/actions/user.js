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
