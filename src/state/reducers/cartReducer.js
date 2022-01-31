const reducer = (state = [], action ) => {
  switch (action.type){
    case "add":
      for(let i = 0; i < state.length; i++){
        if (state[i].target.id === action.payload.target.id){
          console.log(action.payload.target.id);
          state[i].count ++;
          return state;
        }
      }
      return [...state,action.payload];
    case "remove":
      return state.filter((index=>!(index==action.payload)));
    default:
      return state;
  }
}

export default reducer; 

//incrementing count in reducer now. 