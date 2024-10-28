import React from 'react'

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const Nav = ({date, setDate}) => {
  const leftestDate = addDays(date, -2);
  const leftDate = addDays(date, -1);
  const rightDate = addDays(date, 1);
  const rightestDate = addDays(date, 2);

  const handleDateSelect = (date) => {
    setDate(date);
  }

  const handleDateInputChange = (e) => {
    const [year, month, day] = e.target.value.split('-');
    const selectedDate = new Date(year, month - 1, day);
    setDate(selectedDate);
  }

  return (
    <div>
      <h2>Date</h2>
      <input type='date' onChange={handleDateInputChange} value={date.toISOString().split('T')[0]}/>
      <div>
        <button onClick={() => handleDateSelect(leftestDate)}>{leftestDate.toDateString()}</button>
        <button onClick={() => handleDateSelect(leftDate)}>{leftDate.toDateString()}</button>
        <button style={{fontWeight: 'bold'}}>{date.toDateString()}</button>
        <button onClick={() => handleDateSelect(rightDate)}>{rightDate.toDateString()}</button>
        <button onClick={() => handleDateSelect(rightestDate)}>{rightestDate.toDateString()}</button>
      </div>
    </div>
  )
}

export default Nav