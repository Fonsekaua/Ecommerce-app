import { Index as Input } from "@/src/components/Input";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    return (
        <section className="flex w-4/5">
            <div className="w-full">
                <img className="w-full" src="/banner/banner-03.png" alt="" />
            </div>
            <div className=" w-full flex justify-end">
                <div className="h-full w-lg flex flex-col  mt-20 gap-10 justify-center">
                    <div>
                        <h1 className="text-5xl font-semibold">
                            Create an account
                        </h1>
                        <p className="text-lg font-normal">
                            Enter your details below
                        </p>
                    </div>
                    <form className=" flex-1 flex flex-col gap-5">
                        <Input name="name" placeholder="Name"/>
                        <Input name="email" placeholder="Email" type="email" />
                        <Input name="password" placeholder="Password" type="password" />
                        <div className="text-white font-medium *:flex *:w-full *:h-14 *:cursor-pointer *:items-center *:justify-center *:rounded-sm flex flex-col gap-10">
                            <button className=" bg-red-10">
                                Create account
                            </button>
                            <button className="text-gray-800 gap-5 border-[1px] border-gray-400">
                                <FaGoogle size={25}/> <p> Sign up with Google</p>
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
        </section>
    )
}