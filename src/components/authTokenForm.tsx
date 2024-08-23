import { Button, FormControl, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import React, { useEffect } from "react"
import { useInput } from "../hooks/useInput"
import { useAuthToken } from "../utils/authTokexManager"

const styles = {
    button : {
        height: "100%",
        width: "100%"

    } as React.CSSProperties
}

export const AuthTokenForm = () => {

    const authTokenInput = useInput("", "authToken")
    const authTokenManager = useAuthToken()
    useEffect(() => {
        const authToken = localStorage.getItem("authToken")
        if(authToken){
            authTokenInput.changeValue(authTokenManager.getAuthToken())
        }
    }, [])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(authTokenInput.value)
        authTokenManager.changeAuthToken(authTokenInput.value)
    }
    
    return (
        <>
            <FormControl onSubmit={handleSubmit}>
                <Grid2 container spacing={2} justifyItems={"baseline"} justifyContent={"center"} direction={"row"}>
                    <Grid2>
                        <TextField {...authTokenInput} label="Введи авторизатіон токен" variant="outlined" fullWidth />
                    </Grid2>
                    <Grid2>
                        <Button style={styles.button} type="submit" variant="contained" onClick={handleSubmit}>
                            Зберегти
                        </Button>
                    </Grid2>
                </Grid2>
            </FormControl>
        </>
    )
}