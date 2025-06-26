import FlexBox from "@components/FlexBox"
import imgCapa from "@assets/images/frontpage/img_capa.png"
import { Card } from "primereact/card"
import { Button } from "primereact/button"

export default function USP() {
    return (
        <FlexBox>
            <picture style={{ width: "100%" }}>
                <img src={imgCapa} style={{ width: "100%", borderRadius: 10 }} alt="Mulher sorrindo na frente de um computador." />
            </picture>

            <FlexBox direction="column" width='100%'>
                <Card title="Seu portfólio acadêmico."
                    style={{ backgroundColor: "#AECFE4", color: "#1A1A1A", width: "100%" }}>
                    <h3 style={{ fontSize: 32, margin: 0 }}>Simples</h3>
                    <h3 style={{ fontSize: 32, margin: 0 }}>Colaborativo.</h3>
                    <h3 style={{ fontSize: 32, margin: 0 }}>Compartilhável.</h3>
                    <p>Publique seus artigos, compartilhe projetos e conecte-se com outros estudantes e acadêmicos.</p>
                </Card>

                <div style={{ margin: "0 auto" }}>
                    <FlexBox>
                        <Button label="Criar / Acessar conta" />
                        <Button outlined label="Acessar documentos" />
                    </FlexBox>
                </div>

            </FlexBox>
        </FlexBox>
    )
}