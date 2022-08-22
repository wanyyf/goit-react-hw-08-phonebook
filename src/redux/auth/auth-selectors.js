export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getUsername = state => state.auth.user.name;

export const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
