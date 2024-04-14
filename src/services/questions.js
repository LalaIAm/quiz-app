import axios from 'axios'

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://opentdb.com/api.php?amount=10&type=multiple',
 
};

export async function getQuestions() {
  try {
    const response = await axios.request(config);
      const data = response.data;
      return data.results
  } catch (error) {
    console.log(error);
  }
}
