export default function Card() {

    return(
        <div>
            <div className="flex items-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl shadow-lg ">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden ">
                                <img src="" alt="img" />

                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-3">
                                Javascript
                            </h5>
                            <p className=" text-lg text-gray-600 mt-3 ">
                                udgegdeduede
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
    
}