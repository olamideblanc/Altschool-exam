import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('0')  


    function increment() {
        setCount(count+ 1)
    }

    function decrement() {
        setCount(count- 1)
    }

    const handleChange = event => {
        const result = Number(event.target.value.replace(/\D/g, ''))
        setValue(result)
       display1()
      }
      


    function reset() {
        setCount(() => {
            if(count !== 0) {
                return 0
            }
            if(count === 0){
                return 0
            }
        })
    }

    function display1() {
       setCount(value)
    }
    return {value, count , handleChange, increment, decrement, reset}
}

export default useCount