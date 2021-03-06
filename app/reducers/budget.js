import { ADD_BUDGET_CATEGORY, UPDATE_BUDGET_CATEGORY, DELETE_BUDGET_CATEGORY } from '../actions/budget';
import lodash from 'lodash';

export default function budget(state = [], action) {
  switch (action.type) {
    case ADD_BUDGET_CATEGORY:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_BUDGET_CATEGORY:
      return state.map(acct => (acct.category_id == action.category_id
                                && acct.period == action.period
                              ) ? action.payload : acct);

    case DELETE_BUDGET_CATEGORY:
      return state.filter(acct => acct.category_id != action.category_id
                                || acct.period != action.period);
    default:
      return state;
  }
}

// import { ADD_BUDGET_CATEGORY, UPDATE_BUDGET_CATEGORY, DELETE_BUDGET_CATEGORY } from '../actions/budget';
// import lodash from 'lodash';
//
// export default function budget(state = {}, action) {
//   var newCategoryList;
//   switch (action.type) {
//   case ADD_BUDGET_CATEGORY:
//     let oldCategoryList = (state.hasOwnProperty(action.period)) ? state[action.period] : [];
//     return {...state,
//             [action.period]: [
//               ...oldCategoryList,
//               action.payload
//             ]
//            }
//   case UPDATE_BUDGET_CATEGORY:
//     // TODO: Fix this to throw error if budget period doesn't exist??
//     if (!state.hasOwnProperty(action.period)) {
//       console.log("Budget period doesn't exist!!")
//       return state
//     }
//     newCategoryList = state[action.period].map(cat => cat.category_id === action.category_id ?
//         Object.assign({}, cat, action.payload) :
//         cat
//     );
//     // newList = lodash.mapValues(state[action.period], (val,period) =>
//     //   (period == action.period) ? action.payload : val
//     // );
//     return {
//       ...state,
//       [action.period]: newCategoryList
//     }
//     // return lodash.mapValues(state, (val,period) =>
//     //   (period == action.period) ? action.payload : val
//     // );
//   // case DELETE_BUDGET_CATEGORY:
//   //   return lodash.pick(state, (_,period) => period != action.period );
//   case DELETE_BUDGET_CATEGORY:
//     // TODO: Fix this to throw error if period doesn't exist
//     if (!state.hasOwnProperty(action.period)) {
//       return state
//     }
//     newCategoryList = state[action.period].filter(cat => cat.category_id !== action.category_id);
//     return {
//       ...state,
//       [action.period]: newCategoryList
//     };
//   default:
//     return state;
//   }
// }
