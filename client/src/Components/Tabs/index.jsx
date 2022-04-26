import { useState } from 'react';
import {
    Tabs,
    Tab,
} from 'react-bootstrap';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


import './index.css';


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

    let events = [
         {
                _id: 1,
                title: 'Arugula',
                dtm: 24,
                harvestDate: '2022-06-01',
                username: 'mcnairjm',
                plantingDates: '2022-07-01'
            },
            {
                _id: 2,
                title: 'Arugula',
                dtm: 24,
                harvestDate: '2022-02-01',
                username: 'mcnairjm',
                plantingDates: '2022-04-01'
            },
            {
                _id: 3,
                title: 'Arugula',
                dtm: 24,
                harvestDate: '2022-07-01',
                username: 'mcnairjm',
                plantingDates: '2022-05-01'
            },

            {
                _id: 4,
                title: 'Basil',
                dtm: 54,
                harvestDate: '2022-06-23',
                username: 'mcnairjm',
                plantingDates: '2022-05-01'
            }
        
        
    ]

    const newEvents = events.map(({
        harvestDate: date,
        ...rest
    }) => ({
        date,
        ...rest
    }));

    console.log(newEvents);

    // Sorts events by planting dates 
    const sortedEvents = events.slice().sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.plantingDates) - new Date(a.plantingDates);
    });
    
        

    
    
    return (
        <>
        <h1 className='head'>CROP CALENDAR</h1>
        <Tabs
            id='controlled-tab'
            activeKey={key}
            onSelect={(key) => setKey(key)}
            className='Tabs' 
        >
            <Tab eventKey='schedule' title='Schedule'>
                <FullCalendar 
                    className='calendar' 
                    defaultView='dayGridMonth' 
                    plugins={[ dayGridPlugin ]} 
                    eventContent={renderEventContent}
                    events={newEvents}
                />
            </Tab>
            <Tab eventKey='plantDates' title='Plant Dates'>
                <table className="table table-striped table-light">
                <caption>List of plantings with planting dates</caption>
                    <thead>
                        <tr>
                            <th scope="col">Planting Date</th>
                            <th scope="col">Plant</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sortedEvents && sortedEvents.map(sortedEvents => (
                        <tr value={sortedEvents.title} key={sortedEvents._id}>
                            <td>{sortedEvents.plantingDates}</td>
                            <td>{sortedEvents.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Tab>
        </Tabs>
    </>
    )
}

export default PageTabs;