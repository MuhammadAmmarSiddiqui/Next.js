import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Form from "../components/form"
import Footer from "../components/footer";

export default function SignUp(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="Sign Up Page" data="sign up"/>
            <div className="grid place-content-center h-[1082px]">
                <Form />
            </div>
            <Footer />
            
        </div>
    )


}