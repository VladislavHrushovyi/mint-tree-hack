import Grid2 from "@mui/material/Unstable_Grid2"
import { Outlet } from "react-router-dom"
import { Header } from "./header"

// const styles = {
//     body: {
//         color: "rgba(0,0,0, 0.7)",
//         paddind: "2rem 1.5rem 2rem 1.5rem"
//     }
// }

export const Root = () => {

    return (
        <>
            <Grid2 container spacing={2} sx={{bgcolor: "rgba(255,127,1,0.7)", padding: "1rem 1.2rem 1rem 1.2rem"}}>
                <Grid2 xs={12}>
                    <Header />
                </Grid2>
                <Grid2 md={12} justifyItems={"center"}>
                    <div id='detail'>
                        <Outlet />
                    </div>
                </Grid2>
            </Grid2>
        </>
    )
}