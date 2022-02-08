import React from 'react';

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'padding' ? '' : day.value}

      {day.event && <div className='event'>{day.event.title}</div>}


      {day.event2 && <div className='event5'>{day.event2.title}</div>}


    </div>
  );
};
