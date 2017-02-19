export const errorHandler = err => {
  throw err;
};

export const getWS = () => {
  if (!process.env.REACT_APP_BROWSER) {
    return require('websocket').w3cwebsocket;
  }
  return window.WebSocket;
};
