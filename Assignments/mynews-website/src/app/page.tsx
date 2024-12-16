import HomePage from "./components/Home";

export default async function Home(){
  await new Promise((resolve) =>{
      setTimeout(resolve, 3000);
  })

  return(
      <div>
          <HomePage />
      </div>
  )
}