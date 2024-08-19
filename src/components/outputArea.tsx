import { Container } from "@mui/material"
import { OutputItem } from "./outputItem"

const styles = {
    container: {
        border: "3px solid black",
        borderRadius: "25px",
        padding: "1em 1.5em 1em 1.5em"
    }
}

export const OutputArea = () => {
    return (
        <>
            <Container style={styles.container}>
                {
                    Array.from(Array(20).keys()).map(item => <OutputItem info={item} />)
                }
            </Container>
        </>
    )
}