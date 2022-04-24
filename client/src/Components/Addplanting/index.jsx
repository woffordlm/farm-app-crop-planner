import { motion } from "framer-motion";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Backdrop from "../Backdrop";
import "./index.css"

import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Addplanting = ({ handleClose,modalOpen,data, text }) => {
console.log('data:', data)




    const [value, onChange] = useState(new Date());

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal green-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            > 
                <form>
                    <label>
                <h2>{"What vegetable do you want to plant ? "}
                   
                    <select className="close-button">
                        {console.log()}
                        <option defaultValue={"Select Plant"}>Select Plant</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </h2>
                    </label>
                <h2>{"When do you want to harvest it ? "}
                    <DatePicker onChange={onChange} value={value} className="calendar-select-planting"/>
                </h2>
                
                    <input type="submit" value="Submit" className="close-button" />
                </form>
                
                <br></br>
                <button className="plant-button close-button" onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );

};

export default Addplanting