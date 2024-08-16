import Grid2 from "@mui/material/Unstable_Grid2"
import { RangeForm } from "../components/rangeForm"

export const SearchPage = () => {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 md={6}>
                    <RangeForm />
                </Grid2>
                <Grid2 md={6}>
                    Шпексі
                </Grid2>
                <Grid2 md={6}>
                    Аутпут
                </Grid2>
                <Grid2 md={6}>
                    Резалт
                </Grid2>
            </Grid2>
        </>
    )
}