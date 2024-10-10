import { useState, useCallback } from 'react'
import {showIncrement} from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)
    const incrementFather = useCallback(
        (c) => {
            console.log('calling setcounter', c)
            setCounter((value) => value + c)
        },
        [],
    )
    return (
        <>
        <div>CallbakHook {counter} </div>
        <showIncrement incrementFather={incrementFather}/>
        </>
    )
}