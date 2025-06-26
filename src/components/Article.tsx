export interface IArticle {
    title: string
    author: string
    text: string
}

export default function Article({ author, text, title }: IArticle) {
    return (
        <article style={{ backgroundColor: "#E8F1FA", padding: "2px", width: "100%" }}>
            <div style={{ backgroundColor: "#D9D9D9" }}>
                <h4 style={{ fontSize: 32 }}>{title}</h4>
                <h5 style={{ fontSize: 24}}>{author}</h5>
                <p style={{ textJustify: "inter-word" }}>{text}</p>
            </div>
        </article>
    )
}