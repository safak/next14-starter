import { sayHello } from "@/lib/action"

const ServerActionTestPage = () => {
    return (
        <div>
            <form action={sayHello}>
                <button>Test</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage