import CardFuncionality from "@components/CardFuncionality";
import GridBox from "@components/GridBox";
import Title from "@components/Title";

export default function HowTo() {
    return (
        <>
            <Title title="Como funciona" />
            <GridBox
                columns={2}
                rows={2}
            >
                <CardFuncionality
                    Icon="pi pi-cloud-upload"
                    Title="Publique facilmente seus trabalhos"
                    Text="Publique monografias, projetos e artigos acadêmicos facilmente."
                />
                <CardFuncionality
                    Icon="pi pi-folder"
                    Title="Construa seu portfólio online"
                    Text="Crie e organize de forma simples um portfólio com todos os seus trabalhos."
                />
                <CardFuncionality
                    Icon="pi pi-file"
                    Title="Faça a referência outros projetos"
                    Text="Referencie trabalhos de outros pesquisadores."
                />
                <CardFuncionality
                    Icon="pi pi-share-alt"
                    Title="Compartilhe com outras pessoas"
                    Text="Compartilhe seu portfólio com facilidade."
                />
            </GridBox>
        </>
    )
}