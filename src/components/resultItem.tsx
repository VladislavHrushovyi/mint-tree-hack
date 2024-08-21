import { Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"

interface ResultItemProps {
    info: number
}

export const ResultItem = ({info}: ResultItemProps) => {

    return (
        <>
            <Grid2 display={"flex"} justifyContent={"space-around"} fontFamily={"monospace"} fontSize={20}>
                <span>{info}</span>
                |
                <span>id 324234234</span>
                |
                <span>treeid 32423423</span>
                |
                <span>23123 ME</span>
                <Button variant="contained">
                    Клейм
                </Button>
            </Grid2>
        </>
    )
}