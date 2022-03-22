const GET_THINGS = "get_things"
const initialState = [];

const populateState = (payload) => ({
  type: GET_THINGS,
  payload,
});

export const getData = () => (dispatch) => fetch(`v1/things.json`)
  .then((response) => response.json())
  .then((data) => {
    dispatch(populateState(data))
  });

const reducer = ( state = initialState, action ) => {
  switch(action.type){
    case GET_THINGS:
      return action.payload;
    default:
      return state;
  };
};

export default reducer;