import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { PiLock } from "react-icons/pi";
import { IoMdCheckbox } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Form = () => {
    return(
        <div className="border py-8 px-[37px] shadow-[0_0px_80px_0px_rgba(0,0,0,0.15)] w-[224px] md:w-[424px]">
            <p className="font-Helvetica font-bold text-[20px] leading-7">Sign Up</p>
            <div className="mt-8 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <GoPerson className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input type="text" placeholder="Name" className="flex-grow ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px]"/>
            </div>
            <div className="mt-4 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <MdOutlineEmail className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input type="email" placeholder="Email" className="flex-grow ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px]"/>
            </div>
            <div className="mt-4 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <PiLock className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input type="password" placeholder="Password" className="flex ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px] "/>
            </div>
            <div className="mt-4 flex">
                <IoMdCheckbox className="text-[#FF9F0D] text-[20px]"/>
                <p className="ml-2 font-Helvetica font-normal text-[14px] leading-[22px]">Remember me?</p>
            </div>
            <button className="mt-8 bg-[#FF9F0D] text-white w-[180px] md:w-[360px] h-11">Sign Up</button>
            <p className="mt-4 flex justify-end font-Helvetica font-normal text-[14px] leading-[22px] text-[#333333]">Forget password?</p>

            <div className="mt-8 flex">
                <hr className="mt-4 border border-[#E0E0E0] w-[84px] md:w-[168px]"/>
                <div className="w-8 h-8 px-[5px] py-[3px] border border-[#E0E0E0]">OR</div>
                <hr className="mt-4 border border-[#E0E0E0] w-[79px] md:w-[161px]"/>

            </div>
            <button className="flex items-center justify-center mt-4 w-full max-w-sm gap-2 px-4 py-2 text-[16px] leading-6 font-normal font-Helvetica text-[#4F4F4F] border border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <FcGoogle className="text-xl" />
                Sign up with Google
            </button>
            <button className="flex items-center justify-center mt-4 w-full max-w-sm gap-2 px-4 py-2 text-[16px] leading-6 font-normal font-Helvetica text-[#4F4F4F] border border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <FaApple className="text-xl" />
                Sign up with Apple
            </button>
            
        </div>
    )
}
export default Form;