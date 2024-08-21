import { Container } from "@mui/material"
import { ResultItem } from "./resultItem"

const styles = {
    container: {
        border: "3px solid black",
        borderRadius: "25px",
        padding: "1em 1.5em 1em 1.5em"
    }
}

export const ResultList = () => {
    return (
        <>
            <Container style={styles.container}>
                {
                    Array.from(Array(20).keys()).map(item => <ResultItem info={item} />)
                }
            </Container>
        </>
    )
}