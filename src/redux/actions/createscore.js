export const type = 'createscore';

const createscore = (id_user, score, date_played, id_game) => {
  return {
    type,
    payload: {
      id_user,
      score,
      date_played,
      id_game
    }, 
  };
};

export default createscore;