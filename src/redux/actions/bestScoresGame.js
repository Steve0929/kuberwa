export const type = 'bestScoresGame';

const bestScoresGame = (id_user, score, date_played, id_game) => {
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

export default bestScoresGame;