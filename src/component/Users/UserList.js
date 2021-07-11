import React,{useState} from 'react';
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector,useDispatch} from 'react-redux';
import * as Action from "../../store/Actions/Action";
import EditModel from "../UI/EditModel";
const UserList = () => {
    const dispatch = useDispatch();
    const mainData = useSelector((state)=>state.TestData.StudentData)

    const [editdata, setEditdata] = useState()
    const [open, setOpen] = useState(false)
const deleteHandle = (id) =>{
dispatch(Action.RemoveID(id));
}
const EditHandler = (data) =>{
  setEditdata(data)
  handleOpen()
  //.console.log(id)
}
const handleOpen = () =>{
  setOpen(true)
}
const handleClose = () =>{
  setOpen(false)
}
    return (
        <>
        <EditModel handleClose={handleClose} open={open} user={editdata}/>
        <div className={classes.card_container}>
        {mainData?.map((data) => {
          return (
            <Card className={classes.card_data} key={data.id}>
              <div className={classes.card_action}>
               <AddCircleIcon onClick={()=>EditHandler(data)}/>&nbsp;<DeleteForeverIcon onClick={()=>deleteHandle(data.id)} />
              </div>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}years</p>
            </Card>
            );
            })}
        </div>
        </>
    )
}

export default UserList
