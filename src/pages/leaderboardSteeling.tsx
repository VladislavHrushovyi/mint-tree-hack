import { Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { ProxyForm } from "../components/proxyForm"
import { OutputArea } from "../components/outputArea"

const styles = {
    start_button : {
        height: "100%",
        fontSize: "5em"
    } as React.CSSProperties
}

export const LeaderboardSteeling = () => {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 md={6} sm={12}>
                    <Button variant="contained" style={styles.start_button} fullWidth>
                        СТАРТУЄМ
                    </Button>
                </Grid2>
                <Grid2 md={6} sm={12}>
                    <ProxyForm />
                </Grid2>
                <Grid2 md={12} sm={12}>
                    <OutputArea />
                </Grid2>
            </Grid2>
        </>
    )
}