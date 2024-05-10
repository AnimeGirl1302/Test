const axios = require('axios');

class ThirdPartyApi {
  async func() {
    try {
      const response = await axios.get('https://api.example.com/data');
      console.log(response.data); // The response data will be available here
  } catch (error) {
      console.error(error);
  }
  }
}