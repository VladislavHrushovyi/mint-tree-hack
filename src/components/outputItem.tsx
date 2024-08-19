interface OutputItemProps {
    info: number
}

export const OutputItem = ({info} : OutputItemProps) => {
    console.log(info)
    return (
        <>
            <p>
                <span>{info}.</span>
                <span>{"id 2131313"}</span>
                <span>10230ME</span>
            </p>
        </>
    )
}