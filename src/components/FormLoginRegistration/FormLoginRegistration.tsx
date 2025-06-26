import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormLogin from "@components/FormLoginRegistration/FormLogin";
import FormRegistration from "@components/FormLoginRegistration/FormRegistration";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import type IFormInput from "@components/FormLoginRegistration/IFormInput";

interface IOptionLabel {
    icon: string
    value: "Login" | "Cadastro"
}

export default function FormLoginRegistration() {
    const [mode, setMode] = useState<"Login" | "Cadastro">("Login")

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        const hasErrors = Object.keys(errors).length > 0
        setIsButtonDisabled(hasErrors)
    }, [errors])

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        if (mode === "Login") {
            // await fetch("")
            console.log("login");
        } else {
            console.log("cadastro");
            // await fetch("")
        }

        console.log(data);
        reset()
    }

    const handleForgetPassword = async () => {

    }

    const options: IOptionLabel[] = [
        { icon: "pi pi-user", value: "Login" },
        { icon: "pi pi-user-plus", value: "Cadastro" },
    ]

    const optionsTemplate = (option: IOptionLabel) => {
        return (
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                <i className={option.icon} />
                <p>{option.value}</p>
            </div>
        )
    }

    return (
        <section
            style={{
                display: "inline-block",
                border: "solid black 1px",
                textAlign: "center",
                padding: 4
            }}>
            <h3>Bem vindo!</h3>
            <SelectButton
                value={mode}
                itemTemplate={optionsTemplate}
                onChange={(e) => setMode(e.value)}
                options={options}
                allowEmpty={false}
            />

            <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: 20 }}>
                {
                    mode === "Login" ? <FormLogin register={register} errors={errors} /> :
                        mode === "Cadastro" && <FormRegistration register={register} errors={errors} />
                }
                <Button label={mode} type="submit" disabled={isButtonDisabled} />
            </form>
        </section>
    )
}