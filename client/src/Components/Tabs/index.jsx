import { useState } from 'react';
import {
    Tabs,
    Tab,
} from 'react-bootstrap';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


import './index.css';

const PageTabs = () => {
    
    const [key, setKey] = useState('schedule');
    
    return (
        
        <Tabs
            id='controlled-tab'
            activeKey={key}
            onSelect={(key) => setKey(key)}
            className='Tabs' 
        >
            <Tab eventKey='schedule' title='Schedule'>
                <FullCalendar className='calendar' defaultView='dayGridMonth' plugins={[ dayGridPlugin ]} />
            </Tab>
            <Tab eventKey='plantDates' title='Plant Dates'>
                Dates
            </Tab>
        </Tabs>
    )
}

export default PageTabs;