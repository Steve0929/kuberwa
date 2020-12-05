export const type = 'updateUser';

const updateUser = (user_object) => {
  return {
    type,
    payload: {
      user_object
    },
  };
};

export default updateUser;
