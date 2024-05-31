import Image from "next/image";
import ContactMe from ".././public/contact.svg"
import "../app/globals.css";




export default function Contact() {
    return(
        <div>
            <center className="text-2xl font-semibold py-5">Contact</center>
                <div className="rounded-lg flex backdrop-filter bg-white bg-opacity-25 mx-20 py-8">
                    <Image
                        src={ContactMe}
                        alt="Contact me"
                        className="rounded-full w-72 h-72 bg-red-700"
                    />
                    <div className="flex flex-col items-center justify-center py-5 w-1/2"></div>
                    <form className="w-1/2 space-y-6 mx-5">
                        <div className="space-y-2">
                            <label className="">User Name</label>
                            <input className="bg-white rounded-xl w-full p-2 py-3 shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="">Email</label>
                            <input className="bg-white rounded-xl w-full p-2 py-3 shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter Your Email"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="">Message</label>
                            <input className="bg-white rounded-xl w-full p-2 py-12 shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter Your Message"
                                type="text"
                            />
                        </div>
                        <input
                            className="p-2 px-6 rounded-lg font-bold cursor-pointer text-purple-400 bg-white hover:shadow-sm hover:shadow-white focus:outline-none focus:shadow-outline"
                            type="submit"
                        />
                    </form>


            </div>
        </div>
    );
}