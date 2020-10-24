import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://enigmatic-tor-45126.herokuapp.com/`
  });
};
