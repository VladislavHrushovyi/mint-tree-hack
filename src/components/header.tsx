import { Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { AuthTokenForm } from "./authTokenForm"

export const Header = () => {
    return (
        <>
            <Stack direction={"row"} style={{textAlign: "center"}} spacing={6}>
                <Link to={"search"}>
                    <Button variant="outlined">
                        Простий пошук
                    </Button>
                </Link>
                <Link to={"steeling"}>
                    <Button variant="outlined">
                        Крадіжка обраних дерев
                    </Button>
                </Link>
                <Link to={"leaderboard-steeling"}>
                    <Button variant="outlined">
                        Крадіжка у лідербордів
                    </Button>
                </Link>
                <AuthTokenForm />
            </Stack>
        </>
    )
}