export const addToCart = (item) => {
  return(dispatch) => {
    dispatch({
      type:"add",
      payload:item
    })
  }
}
export const removeFromCart = (item) => {
  return(dispatch) => {
    dispatch({
      type:"remove",
      payload:item
    })
  } 
}