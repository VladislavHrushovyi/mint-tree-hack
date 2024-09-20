import Grid2 from "@mui/material/Unstable_Grid2"
import { ProxyForm } from "../components/proxyForm"
import { OutputArea } from "../components/outputArea"

export const SteelingPage = () => {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 md={6}>
                    Тіпа форма для айді дерев
                    <p>тіпа кнопка</p>
                </Grid2>
                <Grid2 md={6}>
                    <ProxyForm />
                </Grid2>
                <Grid2 md={12}>
                    <OutputArea />
                </Grid2>
            </Grid2>
        </>
    )
}