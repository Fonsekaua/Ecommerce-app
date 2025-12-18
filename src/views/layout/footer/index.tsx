import { Index as Ul } from "@/src/components/List";
import { BiSend } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export function Footer() {
    return (
        <footer className="bg-black">
            <section className="container p-10">
                <div className="flex flex-col">
                    <nav className="text-white flex items-start justify-between">
                        <ul className="flex flex-col items-start gap-4">
                            <li>
                                <img src="./logo.svg" alt="" />
                            </li>
                            <li className="text-xl font-medium">
                                Subscribe
                            </li>
                            <li className="font-normal text-base">
                                Get 10% off your first order
                            </li>
                            <li className="flex items-center border-2 w-fit p-2 rounded-sm text-gray-300">
                                <input type="text" className="placeholder:text-gray-500 placeholder:text-base w-3/4 font-medium outline-none" placeholder="Enter your email" />
                                <BiSend size={25} className="flex-1" />
                            </li>
                        </ul>
                        <Ul
                            title="Support"
                            text={[
                                "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
                                "exclusive@gmail.com",
                                "+88015-88888-9999"
                            ]}
                        />
                        <Ul
                            title="Account"
                            text={[
                                "My account",
                                "login / register",
                                "cart",
                                "wishlist",
                                "shop"
                            ]}
                        />
                        <Ul
                            title="Quick Link"
                            text={[
                                "Privacy Policy",
                                "Terms Of Use",
                                "FAQ",
                                "Contact"
                            ]}
                        />
                        <div className="flex flex-col items-start gap-3  text-white pt-4">
                            <h1 className="font-medium text-xl capitalize">
                                download app
                            </h1>
                            <ul className="flex flex-col gap-3 w-56">
                                <li className="text-xs hover:underline cursor-default text-gray-400">
                                    Save $3 with App New User Only
                                </li>
                            </ul>
                            <div className="flex gap-2">
                                <div>
                                    <img src="/Qrcode.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between gap-1">
                                    <img src="/Appstore.png" alt="" />
                                    <img src="/GooglePlay.png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 text-red-10 text-xl">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <div className="flex border-t-[1px] border-gray-600 items-center justify-center p-3 text-gray-600 font-semibold">
                <p>
                    Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>

    )
}

