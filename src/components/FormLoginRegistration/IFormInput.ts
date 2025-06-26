export default interface IFormInput {
    email: string
    password: string
    confirmPassword?: string
    firstName?: string
    middleName?: string
    lastName?: string
    url?: string
    phone?: string
}

export type ILoginForm = Pick<IFormInput, "email" | "password">
export type IRegistrationForm = Required<IFormInput>