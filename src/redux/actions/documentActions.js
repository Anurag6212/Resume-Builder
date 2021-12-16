import * as documentActions from "./actions";
import { v4 as uuidv4 } from "uuid";
//import documentReducer from "../reducers/documentReducer";

export const setSkin = (skincd) => {
  return {
    type: documentActions.SET_SKIN,
    payload: {
      id: uuidv4(),
      skincd: skincd,
    },
  };
};
export const updateSkin = (skincd) => {
  return {
    type: documentActions.UPDATE_SKIN,
    payload: {
      skincd: skincd,
    },
  };
};
