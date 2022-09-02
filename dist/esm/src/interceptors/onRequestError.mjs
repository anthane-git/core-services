const onRequestError = error => {
  return Promise.reject(error);
};

export { onRequestError };
