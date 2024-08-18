import { Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"

const styles = {
    form: {
        border: "3px solid black",
        borderRadius: "20px"
    },
    proxyInput: {
    },
    amountInfoBlock:{
        margin:0,
    },
    proxyAmountInfo: {
        display: "flex",
        justifyContent: "flex-end",
        margin: 0,
        padding: 0,
        fontWeight: 200
    }
}

export const ProxyForm = () => {
    return (
        <>
            <FormControl style={styles.form} fullWidth>
                <Grid2 xs={12}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Використовувать проксі" />
                    <TextField
                        id="filled-multiline-static"
                        label="Proxy list(host:port:login:password)"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        fullWidth
                    />
                    <h3 style={styles.proxyAmountInfo}>100 штук</h3>
                </Grid2>
                <Grid2>
                    <Button variant="contained" fullWidth type="submit">
                        Зберегти
                    </Button>
                </Grid2>
            </FormControl>
        </>
    )
}