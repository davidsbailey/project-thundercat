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
      console.log("updating language to " + action.language);
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
