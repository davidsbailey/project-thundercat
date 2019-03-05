// Action Types
const SET_LANGUAGE = "localize/SET_LANGUAGE";

// Action Creators
const setLanguage = language => ({ type: SET_LANGUAGE, language });

// Initial State
const initialState = {
  language: "en"
};

// Reducer
const localize = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};

export default localize;
export { setLanguage };
