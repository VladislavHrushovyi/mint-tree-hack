import Grid2 from "@mui/material/Unstable_Grid2"
import { Outlet } from "react-router-dom"
import { Header } from "./header"

export const Root = () => {

    return (
        <>
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <Header />
            </Grid2>
        </Grid2>
            <div id='detail'>
                <Outlet />
            </div>
        </>
    )
}