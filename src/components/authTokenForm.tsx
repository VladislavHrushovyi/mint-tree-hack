import { Button, FormControl, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import React from "react"

const styles = {
    button : {
        height: "100%",
        width: "100%"

    } as React.CSSProperties
}

export const AuthTokenForm = () => {

    return (
        <>
            <FormControl>
                <Grid2 container spacing={2} justifyItems={"baseline"} justifyContent={"center"} direction={"row"}>
                    <Grid2>
                        <TextField label="Введи авторизатіон токен" variant="outlined" fullWidth />
                    </Grid2>
                    <Grid2>
                        <Button style={styles.button} variant="contained">
                            Зберегти
                        </Button>
                    </Grid2>
                </Grid2>
            </FormControl>
        </>
    )
}