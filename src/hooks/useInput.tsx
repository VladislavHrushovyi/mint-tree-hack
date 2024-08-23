import { useState } from "react"

export const useInput = (initValue: string, name: string) => {
    const [value, setValue] = useState(initValue)

    const changeValue = (value: string) => {
        if(value){
            setValue(_ => value)
        }
    }

    return {
        value,
        name,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        changeValue
    }
}