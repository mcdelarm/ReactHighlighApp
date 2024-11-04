import React from 'react'

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const getYesterdayDate = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return today.toISOString().split('T')[0];
}

const Nav = ({date, setDate}) => {
  const prevDate1 = addDays(date, -4);
  const prevDate2 = addDays(date, -3);
  const prevDate3 = addDays(date, -2);
  const prevDate4 = addDays(date, -1);

  const handleDateSelect = (date) => {
    setDate(date);
  }

  const handleDateInputChange = (e) => {
    const [year, month, day] = e.target.value.split('-');
    const selectedDate = new Date(year, month - 1, day);
    setDate(selectedDate);
  }

  


  return (
    <div className='date-container'>
      <h2>Date</h2>
      <input type='date' onChange={handleDateInputChange} value={date.toISOString().split('T')[0]} max={getYesterdayDate()}/>
      <div>
        <button onClick={() => handleDateSelect(prevDate1)}>{prevDate1.toDateString()}</button>
        <button onClick={() => handleDateSelect(prevDate2)}>{prevDate2.toDateString()}</button>
        <button onClick={() => handleDateSelect(prevDate3)}>{prevDate3.toDateString()}</button>
        <button onClick={() => handleDateSelect(prevDate4)}>{prevDate4.toDateString()}</button>
        <button style={{fontWeight: 'bold'}}>{date.toDateString()}</button>
      </div>
    </div>
  )
}

export default Nav