import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../../store/Actions/Action";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import Error from "../UI/Error";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  //const id = uuid()
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enterdUserName = nameInputRef.current.value;
    const enterdUserAge = ageRef.current.value;
    //console.log(enterdUserName,enterdUserAge)
    if (
      enterdUserName.trim().length === 0 ||
      enterdUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
    }
    if (+enterdUserAge < 10) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age greater than 9",
      });
    } else {
      dispatch(
        Action.AddUser({
          name: enterdUserName,
          age: enterdUserAge,
          id: uuid(),
        })
      );
    }

    nameInputRef.current.value = "";
    ageRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <div>
        {error && (
          <Error
            title={error.title}
            message={error.message}
            close={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />

            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={ageRef} />
            <Button type="submit">Add User</Button>
            {/* <span style={{display :'flex',float:'right' ,padding:"10px",color:"salmon"}} ><strong>clear All</strong> <ClearAllIcon/></span> */}
          </form>
        </Card>
      </div>
      <hr />
    </>
  );
};

export default AddUser;
