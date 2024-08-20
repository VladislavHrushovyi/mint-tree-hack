import Grid2 from "@mui/material/Unstable_Grid2"

interface OutputItemProps {
    info: number
}

const styles = {
    id: {
        fontWeight: "300",
        color: "#333333"
    }
}

export const OutputItem = ({info} : OutputItemProps) => {
    console.log(info)
    return (
        <>
            <Grid2 container fontSize={20} fontFamily={"fantasy"} fontWeight={300} spacing={0.3}>
                <span style={styles.id}>{"id 2131313"}</span>
                
                <span>10230ME</span>
            </Grid2>
        </>
    )
}