import { Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <>
            <Stack direction={"row"} spacing={2}>
                <Link to={"search"}>
                    <Button variant="outlined">
                        Простий пошук
                    </Button>
                </Link>
            </Stack>
        </>
    )
}