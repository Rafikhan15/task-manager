import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='my-5 mx-10'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default Calendars;