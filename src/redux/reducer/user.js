const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return {
        ...state, //... operator is used to keep all the data saved and only the updated value will change
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
