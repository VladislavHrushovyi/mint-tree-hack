import Grid2 from "@mui/material/Unstable_Grid2"
import { RangeForm } from "../components/rangeForm"
import { ProxyForm } from "../components/proxyForm"
import { OutputArea } from "../components/outputArea"


export const SearchPage = () => {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 md={6}>
                    <RangeForm />
                </Grid2>
                <Grid2 md={6}>
                    <ProxyForm />
                </Grid2>
                <Grid2 md={6}>
                    <OutputArea />
                </Grid2>
                <Grid2 md={6}>
                    Резалт
                </Grid2>
            </Grid2>
        </>
    )
}