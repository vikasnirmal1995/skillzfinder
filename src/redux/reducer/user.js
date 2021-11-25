const INITIAL_STATE = {
  user: null,
  location: null,
  ipaddress: null,
  skillers: [],
  likedSkillers: [],
  isPageLoader: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return {
        ...state, //... operator is used to keep all the data saved and only the updated value will change
        user: action.payload,
      };
    case "UPDATE_USER_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    case "GET_ALL_SKILLERS":
      return {
        ...state,
        skillers: action.payload,
      };

    case "GET_IP_ADDRESS":
      return {
        ...state,
        ipaddress: action.payload,
      };

    case "GET_ALL_LIKED_SKILLERS":
      return {
        ...state,
        likedSkillers: action.payload,
      };

    case "LOG_OUT_SKILLER":
      return {
        ...state,
        user: action.payload,
      };
    case "PAGE_LOADER":
      return {
        ...state,
        isPageLoader: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
