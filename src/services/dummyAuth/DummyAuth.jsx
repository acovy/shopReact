import axios from 'axios';

const DummyAuth = async () => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default DummyAuth;