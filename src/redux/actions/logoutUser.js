export const type = 'logoutUser';

const logoutUser = () => {
  return {
    type,
    payload: {
      //user_object
    },
  };
};

export default logoutUser;
