const reducer = (state = [], action ) => {
  switch (action.type){
    case "add":
   
    for(let i = 0; i < state.length; i++){
      if (state[i].target.name === action.payload.target.name){
        state[i].target.title++;
        let temp = state[i].target.value;
        let amount = state[i].target.newPrice = temp * state[i].target.title;
        let amountRounded = amount.toFixed(2);
        state[i].target.newPrice = amountRounded;
        return [...state]
      } 
    }
    action.payload.target.title++;
    let amount = parseFloat(action.payload.target.value);
    let amountRounded = amount.toFixed(2);
    action.payload.target.newPrice = amountRounded
    return [...state,action.payload];

    case "remove":
      return state.filter((index=>!(index==action.payload)));

    default:
      return state;
  }
}

export default reducer; 

