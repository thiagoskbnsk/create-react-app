const TYPES = {
  AUTH_USER: "AUTH_USER",
  UNAUTH_USER: "UNAUTH_USER",
  AUTH_ERROR: "AUTH_ERROR",
  FETCH_PARTNERS: "FETCH_PARTNERS",
  CHANGE_ADMIN_PARTNER: "CHANGE_ADMIN_PARTNER"
};

const signinUser = ({ token, isAdmin, admin }, state) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      token,
      admin
    })
  );

  return {
    ...state,
    auth: {
      authenticated: true,
      token,
      admin
    }
  };
};

export const authAction = (state, action) => {
  switch (action.type) {
    case TYPES.AUTH_USER:
      return signinUser(action.values, state);
    case TYPES.UNAUTH_USER:
      return console.log({ state, action });
    default:
      return state;
  }
};
