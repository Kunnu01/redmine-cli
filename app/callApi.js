const axios = require('axios');

const baseURL = 'http://redmine.successive.in/';
const key = 'e07da9ee70670cd3c6c49b6ae0f293cd5ef2cbd4';

const callApi = async (method, url, userData) => {
  try {
    return await axios({
      method,
      url: `${baseURL}${url}`,
      data: userData,
      headers: {
        'X-Redmine-API-Key': key,
      }
    });
  } catch (error) {
    return error.message;
  }
};

// const hello = async () => {
//     const result = await callApi('get', '/projects.json', {});
//     console.log(result.data.projects);
// }

// console.log(hello());

// export default callApi;
module.exports = callApi;