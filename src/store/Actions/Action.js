import * as actionTypes from './ActionType';

export const AddUser=(newVal)=>{
    //console.log('Action==', newVal)
    return {
        type:actionTypes.ADD_DATA,
        data:newVal
           }
}
export const RemoveID=(removeId)=>{
    //console.log('Action==', newVal)
    return {
        type:actionTypes.REMOVE_ID,
        id:removeId
           }
}

export const EditData=(editId,data)=>{
    //console.log('Action==', newVal)
    return {
        type:actionTypes.EDIT_DATA,
        id:editId,
        data:data
           }
}