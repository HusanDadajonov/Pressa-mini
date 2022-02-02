import axiosClient from './axios';


const apiCalls = {
    getCards: () => {
      return axiosClient.get(`/ad `);
    },
    discover: (params) => {
        return axiosClient.get(`/?category=IT`, {params});
    },
    getPostsById: (id) =>{
      return axiosClient.get(`/ad/active/${id}`);
    },
  
  };
  export default apiCalls;