import React from 'react'

const Timezone = () => {

    const week = {weekday: 'long'};
    const month = {month: 'long'};
    
    return (
        <>
            <div className="weekday">
                {new Intl.DateTimeFormat('en-US', week).format()},
                {new Date().getDate()} {new Intl.DateTimeFormat('en-US', month).format()} {new Date().getFullYear()}
            </div>
            <div className="time">
                {new Date().toTimeString().slice(0, 5)} 
            </div>
        </>
    )
}

export default Timezone