
interface IFlexBox extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    direction?: "row" | "column"
    width?: number | string
    justifyContent?: string
    alignContent?: string
    gap?: number | string
}

export default function FlexBox({
    children,
    direction = "row",
    width = "100%",
    justifyContent = "space-between",
    alignContent = "center",
    gap = "20px"
}: IFlexBox) {
    return (
        <section style={{
            display: "flex",
            height: "auto",
            width: width,
            gap: gap,
            justifyContent,
            alignContent,
            flexDirection: direction
        }}>
            {children}
        </section>
    )
}