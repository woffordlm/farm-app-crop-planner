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
    console.log(' context.username:',  context.username)
    // data coming in that we are referencing to 
    console.log('data:', data)
    // this saves the value of datepicker
    const [value, onChange] = useState(new Date());
    // this sets up our state form with default empty values
    const [formState, setFormState] = useState({ cropType: '', dtm: '', harvestDate: "" });

    
    const handleDropCropChange = (event) => {
        // this saves the chosen vegetable to state
        let chosenName = event.target.value
        setFormState({...formState, cropType:chosenName })
        
        // this loops through the data that is provided to component
        // this loops matches the vegetable name chosen to an object with the same name
        // then it pulls the associated dtm and saves the dtm in state
        // for (let i = 0; i < data.allCrops.length; i++) {
        //     if (data.allCrops[i].name === chosenName) {
        //     var savedDTM = data.allCrops[i].dtm;
        //     console.log("savedDTM:", savedDTM);
        //     setFormState({ ...formState, dtm: savedDTM });
        //     return;
        //     }
        // }
    }
        console.log('value:', value)
        console.log('formState:', formState)
    // setFormState({...formState, harvestDate:value })


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