




export default function Contact() {
    return(
        <div>
            <center className="text-2xl font-semibold py-5">Contact</center>
                <div className="rounded-lg flex backdrop-filter bg-white bg-opacity-25 mx-20 py-4">
                    <div className="flex flex-col items-center justify-center py-5 w-1/2"></div>
                    <form className="w-1/2 space-y-6 mx-5">
                        <div>
                            <p className="">User Name</p>
                            <input className="bg-white rounded-xl w-full p-2 py-3"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <p className="">Email</p>
                            <input className="bg-white rounded-xl w-full p-2 py-3"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div>
                            <p className="">Message</p>
                            <input className="bg-white rounded-xl w-full p-2 py-12"
                                placeholder="Enter Your Message"
                            />
                        </div>
                        <input
                            className="p-2 px-6 rounded-xl text-purple-400 bg-white hover:shadow-sm hover:shadow-white"
                            type="submit"
                        />
                    </form>


            </div>
        </div>
    );
}