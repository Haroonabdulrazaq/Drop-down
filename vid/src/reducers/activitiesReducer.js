const initialState =[
  {
    id: 1,
    name: "gyma",
    duration: "2 hours"
  }
];

const activitiesReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.payload]
    case 'REMOVE_ACTIVITY':
      const copyState = [...state];
      const filteredActivity = copyState.filter((activity) => activity.id !== action.payload)
      return [...filteredActivity]
    default:
      return state;
  }
}

export default activitiesReducer;