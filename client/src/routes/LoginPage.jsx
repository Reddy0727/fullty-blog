import { SignIn } from "@clerk/clerk-react"

const LoginPage = ()=> {
    return (
        <div className="h-100 flex justify-center items-center">
            <SignIn signUpUrl="/register" />
        </div>
    )
}

export default LoginPage