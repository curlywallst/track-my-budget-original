export default function manageExpenses(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [ ...state, action.expense ];

    default:
      return state;
  }
};
