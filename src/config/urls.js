export const API_BASE_URL = "https://skillztrader.com/api/webservicesnew";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// all apis manage here
export const SEND_OTP = getApiUrl("/sendotp");
export const GETUSERDATA = getApiUrl("/getuserdetails");
export const GETSKILLERDATA = getApiUrl("/get_skills");
export const SEARCHSKILLERS = getApiUrl("/search_skillers_geo");
export const LIKESKILLER = getApiUrl("/SkillerLike");
export const GETLIKEDSKILLERSLIST = getApiUrl("/allLikedSkillers");
