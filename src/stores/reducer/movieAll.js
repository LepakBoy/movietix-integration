const initialState = {
  dataMovie: [],
  isError: false,
  isLoading: false,
  msg: ""
};

const getAllMovie = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: ""
      };
    }
    case "GETALLMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        dataMovie: action.payload.data.data,
        msg: action.payload.data.data.msg
      };
    }
    case "GETALLMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.data.data.msg
      };
    }
    case "POSTMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: ""
      };
    }
    case "POSTMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        msg: action.payload.data.data.msg
      };
    }
    case "POSTMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.data.data.msg
      };
    }
    case "DELETEMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: ""
      };
    }
    case "DELETEMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        msg: action.payload.data.data.msg
      };
    }
    case "DELETEMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        msg: action.payload.data.data.msg
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default getAllMovie;
