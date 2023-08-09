import { createStore, applyMiddleware, Middleware, MiddlewareAPI } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const bindMiddleware = (middleware: Array<any>) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return reducers(state, action);
  }
};

export const store = createStore(reducer, bindMiddleware([thunkMiddleware]));

export const initStore = () => {
  return store;
};

export const wrapper = createWrapper(initStore);

export type RootState = ReturnType<typeof reducers>;
