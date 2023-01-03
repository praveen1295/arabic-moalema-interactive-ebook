export default function reducer(state, action) {
  switch (action.type) {
    case "userData": {
      const userData = [
        ...state.USER,
        { ...action.payload, id: state.USER.length },
      ];
      return { ...state, USER: userData };
    }
    default:
      return state;
  }
}
