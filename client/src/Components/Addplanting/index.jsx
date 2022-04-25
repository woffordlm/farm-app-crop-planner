import { motion } from "framer-motion";
import { useMutation } from "@apollo/client";
import React, { useState } from 'react';
import Backdrop from "../Backdrop";
import "./index.css"
import { ADD_PLANTING } from "../../utils/mutations";
import DatePicker from 'react-date-picker';
import context from "react-bootstrap/esm/AccordionContext";

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
  
    const [formState, setFormState] = useState({ cropType: '', dtm: '', harvestDate: new Date() });

    const handleDropCropChange = (event) => {
        let chosenName = event.target.value;
        const foundDtm = data.allCrops.find((crop) => crop.name === chosenName);
    
        setFormState({ ...formState, cropType: chosenName, dtm: foundDtm });
      };
    
    console.log("FORM STATE ", formState);

    
    const onDateChange =(date)=> {
        console.log("dateChange1!!!!!!!!!",date)
        setFormState({...formState, harvestDate: date})
      }
    const [addPlantingMutation, { error }] = useMutation(ADD_PLANTING);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        await addPlantingMutation({
            variables: { formState },
        });
        // clear form value
        setFormState({ cropType: '', dtm: '', harvestDate: '' });
        } catch (e) {
            console.error(e);
        }
    };



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
                <form onSubmit={handleFormSubmit}>
                    <label>
                <h2>{"What vegetable do you want to plant ? "}
                   
                    <select name = "cropType" className="close-button"onChange = {handleDropCropChange}>
                    <option defaultValue={"Select Plant"}>Select Plant</option>
                        {data?.allCrops?.map(data => (
                            <option value={data.name} key={data._id}>{data.name}</option>
                        ))}      
                    </select>
                

               
                </h2>
                    </label>
                <h2>{"When do you want to harvest it ? "}
                    <DatePicker name= "datePicker" onChange={onDateChange} value={formState.harvestDate} className="calendar-select-planting"/>
                </h2>
                
                    {/* <input  type="submit" value="Submit" className="close-button" /> */}
                    <button className="close-button" type="submit" value= "Submit">
          Submit
        </button>
                </form>
                
                <br></br>
                <button className="plant-button close-button" onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );

};

export default Addplanting