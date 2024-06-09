"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter()

    // useEffect(()=>{
    //     state?.success && router.push('/login')
    // },[state?.success,router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username"></input>

            <input type="password" placeholder="Password" name="password"></input>

            
            <button>Login</button>
            {(state?.error) && 
                (<Alert variant="filled" severity="error">{state?.error}</Alert>)
            }
            <div>
            <br></br>
            {"Don't Have an Account?"}
            </div>
            {/* <Link href="/register"> */}
                {/* <button><b>Register</b></button> */}
                <Button href="/register" size="medium" variant="contained" color="success">
                    Register
                </Button>
            {/* </Link> */}


        </form>
    )
}

export default LoginForm