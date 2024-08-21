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
            <Grid2 container fontSize={20} gap={2} fontFamily={"fantasy"} display={"flex"} justifyContent={"space-around"}>
                <span style={styles.id}>{"id 2131313"}</span>
                <span style={styles.id}>{"treeId 2131313"}</span>
                <span>10230ME</span>
            </Grid2>
        </>
    )
}