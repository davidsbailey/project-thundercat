import { emailsJson } from "./sampleEmibJson";
import { SET_LANGUAGE } from "./LocalizeRedux";

// Initial State
// emails - represents an array of emails in the currently selected language.
const initialState = {
  // Loads emails from a static JSON file until an API exists.
  emails: emailsJson.emailsEN
};

// Reducer
const emibInbox = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        emails: action.language === "fr" ? emailsJson.emailsFR : emailsJson.emailsEN
      };

    default:
      return state;
  }
};

export default emibInbox;
export { initialState };