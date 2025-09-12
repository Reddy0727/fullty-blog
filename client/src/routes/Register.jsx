import { SignUp } from "@clerk/clerk-react"

const RegisterPage = ()=> {
    return (
        <div className="h-100 flex justify-center items-center">
            <SignUp signInUrl="/login" />
        </div>
    )
}

export default RegisterPage