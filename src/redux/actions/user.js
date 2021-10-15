export const userData = (data) => {
  //   console.log("abhi>>>", data);
  return {
    type: "SAVE_USER_DATA",
    payload: data,
  };
};
