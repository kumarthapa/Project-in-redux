import React, {useState, useEffect, useRef} from 'react'
import classes from  './Navbar.module.css'

const Navbar = () => {
const DropdownValue = useRef()
const [menuVal,setMenuVal] = useState()
const DropVal = DropdownValue.current?.value

// const clickHandle = () =>{
//     console.log('rest',DropVal)
// }
useEffect(() => {
    setMenuVal()

    
}, [])

    return (
        <div className={classes.NavContainer}>
            <div><h2>LOGO</h2></div>
            <div className={classes.Dropdown_Div}>
            <select className={classes.Dropdown} ref={DropdownValue}>
                <option value="Menu">Menu</option>
                <option value="menu-1">menu-1</option>
                <option value="menu-2">menu-2</option>
                <option value="menu-3">menu-3</option>
                <option value="menu-4">menu-4</option>
            </select></div>
            {/* <button onClick={clickHandle}>don</button> */}
        </div>
    )
}

export default Navbar
