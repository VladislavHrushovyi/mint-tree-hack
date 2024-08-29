import { useInput } from "./useInput"

export const useRangeForm = () => {
    const toInput = useInput("", "toInput")
    const fromInput = useInput("", "fromInput")
    const pointInput = useInput("", "pointInput")

    const handleSubmit = () => {
        return ""
    }

    return {
        toInput,
        fromInput,
        pointInput,
        handleSubmit
    }
}