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
                harvestDate: '2022-05-01',
                username: 'mcnairjm',
                plantingDates: '2022-05-01'
            },

            {
                _id: 2,
                title: 'Basil',
                dtm: 54,
                harvestDate: '2022-06-23',
                username: 'mcnairjm',
                platingDates: '2022-05-01'
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

    /* events['date'] = events['harvestDate'];

    delete events['harvestDate'];

    console.log(events);

    const newEvents = events;

    console.log(newEvents); */
    
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
                Dates
            </Tab>
        </Tabs>
    </>
    )
}

export default PageTabs;