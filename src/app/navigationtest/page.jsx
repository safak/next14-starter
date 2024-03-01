"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathName = usePathname()
    const searchparams = useSearchParams()
    const q = searchparams.get("q");
    console.log(q)

    console.log(pathName);
    const handleClick = ()=>{
        console.log("clicked")
        router.forward()
    }
    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    )
}

export default NavigationTestPage