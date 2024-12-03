const Main = () => {
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80"> 
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-6xl font-bold">MOVIES</h1>
                    <h1 className="text-green-400 font-bold">View all</h1>
                </div>
                <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                        <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="joker.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Joker</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                        <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="joker.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Get Smart</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                    <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="joker.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Dora</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        <div className="w-full h-full flex flex-col justify-center bg-main_blue px-80 mt-20"> 
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-6xl font-bold">EVENTS</h1>
                    <h1 className="text-green-400 font-bold">View all</h1>
                </div>
                <div className="h-0.5 bg-gray-600 mt-4 mb-8"> </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                        <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="trek.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Joker</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                        <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="trek.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Get Smart</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col rounded-2xl border hover:border-green-400">
                    <img className="w-auto h-96 object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src="trek.jpg"></img>
                        <div className="flex flex-col py-4 px-8">
                            <h1 className="text-white text-2xl">Dora</h1>
                            <div className="h-0.5 bg-gray-600"></div>
                            <div className="flex gap-2">
                                <h1 className="text-white">89%</h1>
                                <h2 className="text-white">98%</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        </>
    )
}
export default Main;