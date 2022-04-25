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
//  console.log('data:', data)
 const [value, onChange] = useState(new Date());

 const [formState, setFormState] = useState({ cropType: '', dtm: '', username: 'kana', harvestDate: '2022-06-05' });

 console.log('formState:', formState)
 const handleDropCropChange = (event) => {
     let chosenName = event.target.value
    setFormState({...formState, cropType:chosenName })
    console.log('formState:', formState)


// for (let i = 0; i < data.allCrops.length; i++) {
//       if (data.allCrops[i].name === chosenName) {
//         var savedDTM = data.allCrops[i].dtm;
//         console.log("savedDTM:", savedDTM);
//         setFormState({ ...formState, dtm: savedDTM });
//         return;
//       }
//     }
     console.log('formState:', formState)
}







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
                   
                    <select name = "cropType" className="close-button"onChange = {handleDropCropChange}>
                    <option defaultValue={"Select Plant"}>Select Plant</option>
                        {data.allCrops && data.allCrops.map(data => (
                            <option value={data.name} key={data._id}>{data.name}</option>
                        ))}      
                    </select>
                

               
                </h2>
                    </label>
                <h2>{"When do you want to harvest it ? "}
                    <DatePicker name= "datePicker" onChange={onChange} value={value} className="calendar-select-planting"/>
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