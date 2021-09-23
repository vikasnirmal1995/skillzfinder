export const API_BASE_URL = "api-url-here";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// all apis manage here
export const GET_USERS = getApiUrl("/user"); //for example
