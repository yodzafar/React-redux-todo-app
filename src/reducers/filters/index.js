import {CHANGE_FILTER} from "../../constants/action-types";

const baseFilter = 'all';

export const filters = (state = baseFilter, {type, filterName}) =>{
  switch (type) {
    case CHANGE_FILTER:
      return filterName;
    default:
      return state
  }
};