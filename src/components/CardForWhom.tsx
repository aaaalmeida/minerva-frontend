export interface ICardForWhom {
    image: string
    alt: string
    title: string
    text: string
}

export default function CardForWhom({
    alt,
    image,
    text,
    title
}: ICardForWhom) {
    return (
        <figure style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#D9D9D9",
            borderRadius: 12,
            overflow: "hidden",
            height: 350,
            padding: 10,
            width: "80%"
            // maxWidth: 300,
        }}>
            <div style={{
                flex: "0 0 65%",
                padding: 16,
                backgroundColor: "#E8F1FA",
                display: "flex",
                flexDirection: "column",
                alignContent: "space-evenly",
                borderRadius: 10
            }}>
                <h4 style={{ fontSize: 24 }}>{title}</h4>
                <p style={{ fontSize: 20 }}>{text}</p>
            </div>
            <img src={image} alt={alt}
                style={{
                    flex: "0 0 30%",
                    width: "fit",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 10
                }}
            />
        </figure>
    )
}