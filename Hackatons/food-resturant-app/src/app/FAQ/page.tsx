import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function FAQ(){
    return(
        <div>
            <Navbar HomeClr="text-[#FF9F0D]"/>
            <Hero heading="FAQ Page" data="faq"/>
            <div className="grid place-content-center my-[120px]">
                <h1 className="font-Helvetica font-bold text-[48px] leading-[56px] text-[#333333] text-center">Questions Looks Here</h1>
                <p className="font-normal text-[16px] leading-6 text-[#4F4F4F] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                <div className="mt-[56px] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6">
                    <div className="w-[250px] lg:w-[324px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">How we serve food?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>
                    <div className="w-[250px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">How can we get in touch with you?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>
                    <div className="w-[250px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">How is our food quality?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>
                    <div className="w-[250px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">What will be delivered? And When?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>
                    <div className="w-[250px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">How do we give home delivery?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>
                    <div className="w-[250px] xl:w-[648px] p-6 rounded-md bg-[#FAF7F2]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-Helvetica text-[18px] leading-[26px] font-bold">Is this restaurant 24 hours open?</h2>
                            <p className="text-[24px]">+</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}