import { 
  SET_USERNAME,
  LOGIN,
  LOGOUT,
  ERROR,
  FETCH_EVENTS,
  FETCH_STATUS
} from './actions';

const initialState = {
  loggedIn: false,
  username: "",
  profile: {},
  error: '',
  events: [],
  status: {}
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case LOGOUT:
      return {
        ...initialState,
      }
    case ERROR:
      return {
        ...initialState,
        error: action.payload
      }
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    case FETCH_STATUS:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state;
  }
};

export default reducers;
