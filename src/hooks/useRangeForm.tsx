import { GenericHTMLFormElement } from "axios"
import { useInput } from "./useInput"

export const useRangeForm = () => {
    const toInput = useInput("", "toInput")
    const fromInput = useInput("", "fromInput")
    const pointInput = useInput("", "pointInput")

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        console.log(`${fromInput.value}-${toInput.value}-${pointInput.value}`)
    }

    return {
        toInput,
        fromInput,
        pointInput,
        handleSubmit
    }
}