import { useCallback, useState } from "react"
import PasswordRegex, { specialCharsRegex, minLength } from "@utils/Regex/PasswordRegex"

interface IPasswordValidationResult {
    valid: boolean,
    errors: string[]
}

export default function usePasswordValidator() {
    const [result, setResult] = useState<IPasswordValidationResult>(
        {
            valid: false,
            errors: []
        }
    )

    const validate = useCallback((password: string) => {
        const errors: string[] = []
        const regex = PasswordRegex

        if (password.length < minLength) errors.push(`A senha deve ter pelo menos ${minLength} caracteres.`);
        if (!/[a-z]/.test(password)) errors.push("A senha deve conter pelo menos uma letra minúscula.");
        if (!/[A-Z]/.test(password)) errors.push("A senha deve conter pelo menos uma letra maiúscula.");
        if (!/\d/.test(password)) errors.push("A senha deve conter pelo menos um número.");
        if (!specialCharsRegex.test(password)) errors.push('A senha deve conter pelo menos um caractere especial.');
        if (!regex.test(password)) errors.push("Sua senha tem algum erro, tente outra vez.");

        const validateResult: IPasswordValidationResult = {
            valid: errors.length === 0,
            errors
        }

        setResult(validateResult)
        return result
    }, [])

    return {
        validate,
        result
    }
}