import {CHANGE_FILTER} from "../../constants/action-types";

export const changeFilter = (filterName) => {
  return{
    type:CHANGE_FILTER,
    filterName
  }
};