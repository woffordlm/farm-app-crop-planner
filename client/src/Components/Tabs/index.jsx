import { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
    Tabs,
    Tab,
} from 'react-bootstrap';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { QUERY_PLANTINGS } from '../../utils/queries';
import './index.css';
import { format } from 'date-fns'
import auth from '../../utils/auth';

function renderEventContent(eventinfo) {
    return (
        <>
            <b>{eventinfo.timeText}</b>
            <i>{eventinfo.event.title}</i>
        </>
    )
}

const PageTabs = () => {
    
    const [key, setKey] = useState('schedule');
    const { loading, data } = useQuery(QUERY_PLANTINGS);
    console.log('data:', data)

    const plantings = data?.allPlantings || [];
    console.log('plantings:', plantings)

    const plantingData = data?.allPlantings?.map(plant => {
        const formattedDate = format(Date.parse(plant.harvestDate), 'yyyy/MM/dd').replace('/', '-').replace('/', '-')
        const previousDayDate = new Date(formattedDate)
        previousDayDate.setDate(previousDayDate.getDate() - plant.dtm)
        const plantingDate = format(Date.parse(previousDayDate), 'MM/dd/yyyy')
        
        return {
            title: plant.cropType,
            date: formattedDate,
            plantingDate: plantingDate
        }
    })

   
  
/* 
    // Sorts events by planting dates 
    const sortedEvents = plantings.slice().sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.plantingDates) - new Date(a.plantingDates);
    });
    
     */


    
    
    return (
        <>
        {/* <h1 className='head'>CROP CALENDAR</h1> */}
        <Tabs
            id='controlled-tab'
            activeKey={key}
            onSelect={(key) => setKey(key)}
            className='Tabs' 
        >
            
            <Tab eventKey='schedule' title='Harvest Schedule'>
            {auth.loggedIn() ? (
                <FullCalendar 
                    className='calendar' 
                    defaultView='dayGridMonth' 
                    plugins={[ dayGridPlugin ]} 
                    eventContent={renderEventContent}
                    events={plantingData}
                />
            ) : (
                <FullCalendar
                    className='calendar'
                    defaultView='dayGridMonth'
                    plugins={[ dayGridPlugin ]}
                    />
            )}
            </Tab>
            <Tab eventKey='plantDates' title='Planting Dates'>
                {auth.loggedIn() ? (
                <table className="table table-striped table-light">
                <caption>List of plantings with planting dates</caption>
                    <thead>
                        <tr>
                            <th scope="col">Planting Date</th>
                            <th scope="col">Plant</th>
                        </tr>
                    </thead>
                    <tbody>
                    {plantingData && plantingData.map(plantingData => (
                        <tr value={plantingData.title} key={plantingData._id}>
                            <td>{plantingData.plantingDate}</td>
                            <td>{plantingData.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : (
                    <table className="table table-striped table-light">
                <caption>List of plantings with planting dates</caption>
                    <thead>
                        <tr>
                            <th scope="col">Planting Date</th>
                            <th scope="col">Plant</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    </table>
                )}
            </Tab>
        </Tabs>
    </>
    )
}

export default PageTabs;