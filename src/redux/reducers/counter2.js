import { ADD2 } from "../actions/actionType";

const initialState = {
  counter2: 200,
};

const counter2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        counter2: state.counter2 + action.value,
      };

    default:
      break;
  }
  return state;
};

export default counter2;
