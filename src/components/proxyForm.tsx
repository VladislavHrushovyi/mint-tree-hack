import { Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { useProxyForm } from "../hooks/useProxyForm"

const styles = {
    form: {
        border: "3px solid black",
        borderRadius: "20px"
    },
    proxyInput: {
    },
    amountInfoBlock: {
        margin: 0,
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

    const proxyFormHook = useProxyForm()

    return (
        <>
            <FormControl style={styles.form} fullWidth>
                <form onSubmit={proxyFormHook.handleSubmit}>
                    <Grid2 xs={12}>
                        <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            checked={proxyFormHook.isUseForm} 
                            onChange={proxyFormHook.activateForm} 
                            label="Використовувать проксі" 
                            />
                        <TextField
                            id="filled-multiline-static"
                            label="Proxy list(host:port:login:password)"
                            {...proxyFormHook.proxyInput}
                            multiline
                            disabled={!proxyFormHook.isUseForm}
                            rows={4}
                            defaultValue=""
                            variant="filled"
                            fullWidth
                        />
                        <h3 style={styles.proxyAmountInfo}>{proxyFormHook.amountProxy}</h3>
                    </Grid2>
                    <Grid2>
                        <Button variant="contained" disabled={!proxyFormHook.isUseForm} fullWidth type="submit">
                            Зберегти
                        </Button>
                    </Grid2>
                </form>
            </FormControl>
        </>
    )
}