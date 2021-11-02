const initialState = {
  dataSelected: null,
  stat: false
};

const selectedData = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTEDMOVIE_FULFILLED": {
      console.log(state, "reduce");
      return {
        ...state,
        data: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export default selectedData;
