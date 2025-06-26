import { FloatLabel } from "primereact/floatlabel";
import FlexBox from "@components/FlexBox";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useForm } from "react-hook-form";
import { type ILoginForm } from "@components/FormLoginRegistration/IFormInput"
import { Button } from "primereact/button";

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors }, reset } =
        useForm<ILoginForm>()

    return (
        <FlexBox gap="40px" direction="column">
            <FloatLabel>
                <InputText id="email" keyfilter="email" size={30}
                    {...register("email", { required: "Email obrigatório" })} />
                <label htmlFor="email">Email</label>
                {errors.email && <p>{errors.email.message}</p>}
            </FloatLabel>

            <FloatLabel>
                <Password id="password" toggleMask feedback={false} size={27}
                    {...register("password", { required: "Senha obrigatória" })}
                />
                <label htmlFor="password">Senha</label>
                {errors.password && <p>{errors.password.message}</p>}
            </FloatLabel>
            {/* TODO: */}
            <a href="#">Esqueceu a senha?</a>
            <Button></Button>
        </FlexBox>
    )
}