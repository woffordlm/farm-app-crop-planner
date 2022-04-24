import Auth from '../utils/auth';
// import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import {useState} from 'react'
// import {QUERY_CROPREFERENCE} from '../utils/queries'
// import {Button} from "react-bootstrap"
// import Sidebar from '../Components/Sidebar';
// import PageTabs from '../Components/Tabs';
// import Header from '../Components/Header';
function Practice({data}) {
    const [formState, setFormState] = useState({ cropType: '', dtm: '', username: '', harvestDate: '' });
    
    const handleDropCropChange = (event) => {
    // console.log('event:', event.target.value)
    let chosenName = event.target.value;
    console.log('chosenName:', chosenName)
    setFormState({...formState, cropType: chosenName })
    console.log('formStatecrop:', formState.cropType)
    

    // for (let i = 0; i < data.allCrops.length; i++) {
       
    //     if (data.allCrops[i].name === chosenName) {
    //         var savedDTM = data.allCrops[i].dtm;
    //         console.log('savedDTM:', savedDTM)
    //         // setFormState({...formState, dtm: savedDTM })
    //         // console.log('formState:', formState)
    //         return
    //     } 
    // }
}

  return (
        <div className="practice">
                  <select className="close-button" onChange = {handleDropCropChange}>
                        <option defaultValue={"Select Plant"}>Select Plant</option>
                        <option value="Arugula">Arugula</option>
                        <option value="Dill">Dill</option>
                        <option value="Basil">Basil</option>
                        <option value="Beans">Beans</option>
                    </select>
        </div>
  );
}

export default Practice;
