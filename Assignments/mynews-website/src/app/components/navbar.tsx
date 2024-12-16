import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex flex-row items-center flex-wrap  rounded-b-md bg-slate-50  m-8 gap-5 mx-6">
            <div className="mr-48">
                <h1 className="font-sans text-2xl text-red-500 font-semibold">my<span className="text-blue-500">news</span></h1>
            </div>
            <div></div>
            <div><Link href="/">Home</Link></div>
            <div><Link href="/latest">Latest</Link></div>
            <div><Link href="/international">International</Link></div>
            <div><Link href="/business">Business</Link></div>
            <div><Link href="/Sci_Tech">Science & Technology</Link></div>
            
        </div>
    )
    
}