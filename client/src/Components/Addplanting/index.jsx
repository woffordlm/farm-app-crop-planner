import { motion } from "framer-motion";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Backdrop from "../Backdrop";
import "./index.css"

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

const Addplanting = ({ handleClose,plantData, text }) => {
console.log('plantData:', plantData)

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
                <h2>{"What vegetable do you want to plant ?"}</h2>
                    {/* Pick your favorite flavor: */}
                    <select className="close-button">
                        {console.log()}
                        <option defaultValue={"Select Plant"}>Select Plant</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                <h2>{"When do you want to harvest it ?"}</h2>
                    <input type="submit" value="Submit" />
                </form>
                
                <br></br>
                <button className="plant-button close-button " onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );

};

export default Addplanting