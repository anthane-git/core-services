import axios from 'axios';
import { refreshToken } from '../common/refreshToken.mjs';
import { routes } from '../routes/base.mjs';

const onRequest = async request => {
  try {
    const response = await refreshToken();

    if (response.status === 200) {
      request.headers = {
        Authorization: `Bearer ${response.data.access_token}`
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      window.location.href = routes.identityProvider.login;
    }
  }

  return request;
};

export { onRequest };
