import { useEffect, useState } from "react"
import { useInput } from "./useInput"

export const useProxyForm = () => {
    const [isUseForm, setIsUseForm] = useState<boolean>(false)
    const [amountProxy, setAmountProxy] = useState<number>(0)
    const proxyInput = useInput("", "proxyInput")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log(proxyInput.value.substring(0,20))
    }

    const activateForm = () => {
        setIsUseForm(prev => !prev)
    }

    useEffect(() => {
        setAmountProxy(_ => proxyInput.value.split('\n').length - 1)
    }, [proxyInput.value])

    return {
        isUseForm,
        proxyInput,
        handleSubmit,
        activateForm,
        amountProxy
    }
}