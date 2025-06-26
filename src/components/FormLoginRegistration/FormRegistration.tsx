import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import FlexBox from "@components/FlexBox";
import type IFormInput from "@components/FormLoginRegistration/IFormInput";

interface IFormRegistration {
    register: UseFormRegister<IFormInput>
    errors: FieldErrors<IFormInput>
}

export default function FormRegistration({ register, errors }: IFormRegistration) {
    const footer = (
        <>
            <Divider />
            <p className="mt-2">A senha deve ter</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Pelo menos uma letra minúscula</li>
                <li>Pelo menos uma letra maiúscula</li>
                <li>Pelo menos um número</li>
                <li>Pelo menos um caractere especial (@#$%¨&*=+\-_'"\/|?)</li>
                <li>No mínimo 12 caracteres</li>
            </ul>
        </>
    )

    return (
        <FlexBox gap="15px" direction="column">
            <FloatLabel>
                <InputText id="email" keyfilter="email" size={30}
                    {...register("email", { required: "Email obrigatório" })} />
                <label htmlFor="email">Email</label>

            </FloatLabel>

            <FloatLabel>
                <Password
                    inputId="password" toggleMask={true} footer={footer} size={27}
                    weakLabel="Senha Fraca" mediumLabel="Senha Média" strongLabel="Senha Forte"
                    {...register("password", { required: "Senha obrigatória" })}
                />
                <label htmlFor="password">Senha</label>
            </FloatLabel>

            <FloatLabel>
                <Password
                    inputId="passwordConfirm" toggleMask={true} feedback={false} size={27}
                    {...register("confirmPassword", { required: "Confirme a senha" })}
                />
                <label htmlFor="passwordConfirm">Confirmar senha</label>
            </FloatLabel>

            <FloatLabel>
                <InputText id="firstName" keyfilter="alpha" size={30}
                    {...register("firstName", { required: "Nome obrigatório" })}
                />
                <label htmlFor="firstName">Nome *</label>
            </FloatLabel>

            <FloatLabel>
                <InputText id="middleName" keyfilter="alpha" size={30}
                    {...register("middleName")}
                />
                <label htmlFor="firstName">Primeiro sobrenome</label>
            </FloatLabel>

            <FloatLabel>
                <InputText id="lastName" keyfilter="alpha" size={30}
                    {...register("lastName", { required: "Sobrenome obrigatório" })}
                />
                <label htmlFor="firstName">Sobrenome *</label>
            </FloatLabel>

            <FloatLabel>
                <InputText id="url" keyfilter="alphanum" size={30}
                    {...register("url")}
                />
                <label htmlFor="url">Site</label>
            </FloatLabel>

            <FloatLabel>
                <InputText id="phone" keyfilter="pint" size={30}
                    {...register("phone")}
                />
                <label htmlFor="phone">Telefone</label>
            </FloatLabel>
        </FlexBox>
    )
}