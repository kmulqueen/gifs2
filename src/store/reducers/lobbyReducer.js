const initialState = {
  lobby: [
    {
      id: "1",
      userName: "userName 1",
      content: "content 1"
    },
    {
      id: "2",
      userName: "userName 2",
      content: "content 2"
    },
    {
      id: "3",
      userName: "userName 3",
      content: "content 3"
    }
  ]
};

const lobbyReducer = (state = initialState, action) => {
  return state;
};

export default lobbyReducer;
