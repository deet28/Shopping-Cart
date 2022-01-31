
const reducer = (state = [], action ) => {
  switch (action.type){
    case "add":
      return [...state,action.payload];
    case "remove":
      return state.filter((index=>!(index==action.payload)));
    default:
      return state;
  }
}

export default reducer; 