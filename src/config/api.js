import axiosClient from './axios';


const apiCalls = {
    getCards: () => {
      return axiosClient.get(`/ad `);
    },
    discover: (params) => {
        return axiosClient.get(`/?category=IT`, {params});
    },
  
  };
  export default apiCalls;