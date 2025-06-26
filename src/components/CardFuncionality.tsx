import FlexBox from "@components/FlexBox"

interface ICardFuncionality {
    Icon: string
    Title: string
    Text: string
}

export default function CardFuncionality({
    Icon,
    Text,
    Title
}: ICardFuncionality) {
    return (
        <article style={{
            backgroundColor: "#A4D2F4",
            padding: 10,
            borderRadius: 10
            // width: "50%"
        }}>
            <FlexBox >
                <i className={Icon} style={{ fontSize: 64, margin: "auto", padding: 8 }} />
                <div style={{
                    borderRadius: 10,
                    backgroundColor: "#FAFAFA",
                    height: 150,
                    gap: 4,
                    width: "85%",
                    padding: 8
                }}>
                    <h3>{Title}</h3>
                    <p>{Text}</p>
                </div>
            </FlexBox>
        </article>
    )
}