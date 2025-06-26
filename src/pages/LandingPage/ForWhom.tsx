import CardForWhom, { type ICardForWhom } from "@components/CardForWhom";
import Title from "@components/Title";
import { Carousel } from "primereact/carousel";
import img1 from "@assets/images/frontpage/img-carousel-1.png"
import img2 from "@assets/images/frontpage/img-carousel-2.png"
import img3 from "@assets/images/frontpage/img-carousel-3.png"
import img4 from "@assets/images/frontpage/img-carousel-4.png"

export default function ForWhom() {
    const info: ICardForWhom[] = [
        {
            title: "Estudantes",
            image: img1,
            alt: "Mulher lendo livro sobre programação em uma biblioteca",
            text: "Organize seus trabalhos de graduação, monitoria e projetos de extensão. Construa seu portfólio desde cedo!"
        },
        {
            title: "Professores",
            image: img2,
            alt: "Professora de universidade apresentando uma palestra",
            text: "Gerencie suas disciplinas, orientações e produção acadêmica. Conecte-se melhor com seus alunos."
        },
        {
            title: "Acadêmicos",
            image: img3,
            alt: "Professora de universidade apresentando uma palestra",
            text: "Destaque suas conquistas, prêmios e reconhecimentos. Fortaleça sua presença no meio acadêmico."
        },
        {
            title: "Pesquisadores",
            image: img4,
            alt: "Professora de universidade apresentando uma palestra",
            text: "Centralize suas publicações, apresentações e descobertas. Facilite a colaboração e o compartilhamento."
        },
    ]

    const template = (t: ICardForWhom) => {
        return (
            <CardForWhom
                title={t.title}
                image={t.image}
                alt={t.alt}
                text={t.text}
            />
        )
    }
    
    return (
        <>
            <Title title="Para quem é" />
            {/* <CardForWhom
                title={info[0].title}
                image={info[3].image}
                alt={info[0].alt}
                text={info[0].text}
            /> */}
                
            <Carousel value={info} itemTemplate={template}
                showIndicators={false} showNavigators={false}
                circular autoplayInterval={5000} />

        </>
    )
}