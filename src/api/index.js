import axios from "axios";
import { API } from "../constants/endpoint";

let ApiInstance = axios.create({
  baseURL: API.BASE,
  timeout: 60000,
	headers: {},
});

function API_GetConference(payload) {
  return ApiInstance({		
		method: 'get',
		headers: '',
    url: API.ENDPOINTS.GET_CONFERENCE,
		params: {},
  });
}

export {
  API_GetConference
};
