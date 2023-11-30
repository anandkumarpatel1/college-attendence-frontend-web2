import React from 'react'
import './Alert.scss'
import {useDispatch} from 'react-redux'

const Alert = ({message}) => {

    const dispatch = useDispatch()
    const okHandler = () =>{
        dispatch({type: 'clearError'})
        dispatch({type: 'clearMessage'})
    }
  return (

        <div>
            <p>Alert</p>
            <p>{message}</p>
            <div>
                <button onClick={okHandler}>Cancel</button>
                <button onClick={okHandler}>OK</button>
            </div>
        </div>
  )
}

export default Alert