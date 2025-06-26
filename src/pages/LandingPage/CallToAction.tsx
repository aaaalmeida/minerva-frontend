import Article, { type IArticle } from "@components/Article";
import Title from "@components/Title";
import { useState } from "react";

export default function CallToAction() {
    // TODO: colocar dados reais
    const [articleInfo, setArticleInfo] = useState<IArticle[]>([
        {
            title: "O Guia do Mochileiro das Galáxias",
            author: "Douglas Adams",
            text: "As várias versões seguem praticamente o mesmo enredo básico. Contudo, uma vez que Adams reescreveu a história substancialmente para cada nova adaptação, os personagens muitas vezes estão em lugares mutuamente contraditórios. Ao longo de todas as versões, a série segue as aventuras de vários personagens, sendo os principais: Arthur Dent, um inglês azarado; Ford Prefect, um alienígena de um planeta pequeno em algum lugar nos arredores de Betelgeuse e coletor de informações turísticas para o famoso Guia do Mochileiro das Galáxias; Zaphod Beeblebrox, o semi-primo de Ford e o Presidente Galáctico; o deprimido robô Marvin, o Andróide Paranóide; e Trillian, anteriormente conhecida como Tricia McMillan, uma mulher que Arthur conhecera em uma festa em Islington."
        },
        {
            title: "O estrangeiro",
            author: "Albert Camus",
            text: "O estrangeiro narra a história de um homem comum que se depara com o absurdo da condição humana depois que comete um crime quase inconscientemente. Meursault, que vivia sua liberdade de ir e vir sem ter consciência dela, subitamente perde-a envolvido pelas circunstâncias e acaba descobrindo uma liberdade maior e mais assustadora na própria capacidade de se autodeterminar. Uma reflexão sobre liberdade e condição humana que deixou marcas profundas no pensamento ocidental. Uma das mais belas narrativas deste século."
        }
    ])

    return (
        <>
            <Title title="Conheça alguns artigos" />
            <Article {...articleInfo[0]} />
            <Article {...articleInfo[1]} />
        </>
    )
}