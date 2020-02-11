import React, {useState} from 'react'

function Clicker() {
    const [num, setNum] = useState(1)

    function handleClick(){
        let number = Math.floor(1+ Math.random() * 11)
        setNum(number)
    }

    return (
        <div>
            Number is: {num}
            <button onClick={handleClick}>Generate Random Number</button>
        </div>
    )
}

export default Clicker
