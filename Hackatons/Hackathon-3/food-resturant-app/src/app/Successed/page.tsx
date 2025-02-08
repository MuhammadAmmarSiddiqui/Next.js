import Link from "next/link"
export default function Successed(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg mt-4">Thank you for your purchase.</p>
        <Link href="/Order"><p className="text-lg mt-4 text-blue-500 hover:text-yellow-300">Go to order page</p></Link>
    </div>
    )
}