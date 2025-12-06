const setJWTToken = (token: string) => {
  localStorage.setItem("jwt_token", token);
}

const getJWTToken = (): string | null => {
  return localStorage.getItem("jwt_token");
}

const removeJWTToken = () => {
  localStorage.removeItem("jwt_token");
}

export { setJWTToken, getJWTToken, removeJWTToken };