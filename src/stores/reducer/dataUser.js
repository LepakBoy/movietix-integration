const initialState = {
  fisrtName: "",
  lastName: "",
  userImage: null,
  role: "",
  status: ""
};

const getDataUser = (state = initialState, action) => {
  switch (action.type) {
    case "GETDATA": {
      console.log(action, "reduce data user");
      return {
        ...state
      };
    }
  }
};

export default getDataUser;
