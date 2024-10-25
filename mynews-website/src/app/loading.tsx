export default function Loading(){
    
    return(
        <div className="w-full h-64 flex justify-center content-center py-56">
            <h1 className="font-sans text-2xl text-red-500 font-semibold">my<span className="text-blue-500">news</span>
           
            </h1>
           <svg className="h-10 w-10 animate-spin" viewBox="0 0 100 100">
  <circle
    fill="none"
    strokeWidth="10"
    className="stroke-current opacity-40 text-blue-300"
    cx="50"
    cy="50"
    r="40"
    />
  <circle
    fill="none"
    strokeWidth="10"
    className="stroke-current text-red-300"
    stroke-dasharray="250"
    stroke-dashoffset="210"
    cx="50"
    cy="50"
    r="40"
    />
    </svg>  
        </div>
    )
}