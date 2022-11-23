import React, { Component } from 'react'
import Clock from 'react-live-clock'
import '../hojas-de-estilo/Clock.css'

class Time extends Component {
    render(){
    return (
        <div className='Time'>
            <Clock format={'h:mm'} ticking={true} timezone={'America/Lima'} />
        </div>
        )
    }
}


export default Time