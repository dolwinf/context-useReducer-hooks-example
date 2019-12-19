export default function reducer(state, action) {
  switch (action.type) {
    case "JOKE":
      return {
        ...state,
        joke: action.payload
      };
    default:
      return state;
  }
}
