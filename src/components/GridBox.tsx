
interface IGridBox extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    rows: number
    columns: number
    rowSizes?: (string | number)[]
    columnSizes?: (string | number)[]
    gap?: number | string
}

export default function GridBox({
    children,
    rows,
    columns,
    rowSizes,
    columnSizes,
    gap = "20px"
}: IGridBox) {
    const generateTemplate = (count: number, sizes?: (string | number)[]) => {
        if (sizes && sizes.length > 0) {
            const template = [];
            for (let i = 0; i < count; i++) {
                if (sizes[i]) {
                    template.push(
                        typeof sizes[i] === 'number' ? `${sizes[i]}px` : sizes[i]
                    );
                } else {
                    template.push('1fr');
                }
            }
            return template.join(' ');
        } else {
            return `repeat(${count}, 1fr)`;
        }
    };

    return (
        <section style={{
            display: "grid",
            gap: typeof gap === "number" ? `${gap}px` : gap,
            gridTemplateColumns: generateTemplate(columns, columnSizes),
            gridTemplateRows: generateTemplate(rows, rowSizes)
        }}>
            {children}
        </section>
    )
}