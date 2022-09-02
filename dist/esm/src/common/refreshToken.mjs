import axios from 'axios';
import { routes } from '../routes/base.mjs';

const refreshToken = async () => {
  const response = await axios.post(routes.identityProvider.refreshToken, {}, {
    withCredentials: true
  });
  return response;
};

export { refreshToken };
