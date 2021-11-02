const initialState = {
  idUser: "",
  isError: false,
  isLoading: false,
  msg: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN_PENDING || FULFILLED || REJECTED : LOGIN DIAMBIL DARI action.type...PENDING< FULFILLED dan REJECTED dari redux promise middleware
    // menggunakan 3 case untuk menggantikan .then().catch()
    case "LOGIN_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: ""
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        // action.payload : res di UI
        // payload dapet dari action auth
        idUser: action.payload.data.data.id_user,
        msg: action.payload.data.msg
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        idUser: "",
        msg: action.payload.response.data.msg
      };
    }
    default: {
      return {
        ...state
      };
    }
    // REGISTER
    case "REGISTER_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: ""
      };
    }
    case "REGISTER_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        // action.payload : res di UI
        // payload dapet dari action auth
        idUser: action.payload.data.data.id_user,
        msg: action.payload.data.msg
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        idUser: "",
        msg: action.payload.response.data.msg
      };
    }
  }
};

export default auth;
