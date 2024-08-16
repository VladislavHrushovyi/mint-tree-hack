import { Button, FormControl, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
const styles = {
    form: {
        border: "medium solid rgba(0,0,0,1)",
        borderRadius: "20px",
        padding: "1rem 1.5rem 1rem 1.5rem"
    }
}
export const RangeForm = () => {
    return (
        <>
            <FormControl style={styles.form}>
                <Grid2 spacing={2} container>
                    <Grid2 xs={6}>
                        <TextField label="Старт" variant="outlined" fullWidth/>
                    </Grid2>
                    <Grid2 md={6}>
                        <TextField label="Фініш" variant="outlined" fullWidth/>
                    </Grid2>
                    <Grid2 md={12}>
                        <TextField label="Мін. кількість" variant="outlined" fullWidth/>
                    </Grid2>
                    <Grid2 md={12}>
                        <Button type="submit" variant="contained" fullWidth>
                            ОК    
                        </Button>
                    </Grid2>
                </Grid2>
            </FormControl>
        </>
    )
}