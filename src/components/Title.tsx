interface ITitle {
    title: string
}

export default function Title({ title }: ITitle) {
    return (
        <h3 style={{ fontSize: 48 }}>{title}</h3>
    )
}