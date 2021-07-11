import * as actionTypes from "../Actions/ActionType";
import { updateObject } from "../Utility";
  
const initialState = {
  StudentData: [],
};

const updateData = (state, action) => {
  const data = action.data;
  const updatedArray = [...state.StudentData, data];
  return updateObject(state, {
  StudentData: updatedArray,
  });
};

const RemoveID = (state, action) => {
    const id = action.id
    const removeData = state.StudentData.filter((result)=>result.id!==id)
    return updateObject(state, {
    StudentData: removeData,
  });
};

const EditData = (state, action) => {
     const id = action.id
     const elementIndex = state.StudentData.findIndex((currId)=> currId.id===id)
     const newArray = [...state.StudentData]
     const editData = action.data
     newArray[elementIndex] = {...newArray[elementIndex], ...editData}
     return updateObject(state,{
      StudentData: newArray
     })
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return updateData(state, action);

    case actionTypes.REMOVE_ID:
      return RemoveID(state, action);

      case actionTypes.EDIT_DATA:
          return EditData(state,action)

    default: return state;
  }
};

export default Reducer;
