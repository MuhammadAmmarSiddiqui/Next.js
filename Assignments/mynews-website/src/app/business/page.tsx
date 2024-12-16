export default async function Business(){
    await new Promise((resolve) =>{
        setTimeout(resolve, 5000);
    })

    return(
        <div>
            Business Page
        </div>
    )
}