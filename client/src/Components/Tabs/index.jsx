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

    const events = [
        {
            title: 'event 1',
            date: '2022-04-25'
        },
        {
            title: 'event 2',
            date: '2022-04-26'
        },
        
    ]
    
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
                    events={events}
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