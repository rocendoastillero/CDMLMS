export default function TestLayout({ children }) {
    return (
        // <div className="relative w-screen h-screen">
        //     <div className="top-0 right-0 left-0 h-[60px] bg-red-200">

        //     </div>
        //     <div className="flex flex-row w-screen h-full max-h-[90.4%]">
        //         <div className="h-full w-[10rem] bg-sky-200 ">
        //             <div className="flex flex-col items-center w-full">
        //                 <a href=""> a</a>
        //             </div>
        //         </div>
        //         <div className="w-full flex place-content-center items-center">
        //             <div className="max-w-[80%] h-[8rem] w-full bg-slate-200">
        //                 {children}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="relative flex flex-col w-sreen h-screen bg-yellow-300 flex flex-row">
            <div className=" top-0 w-full h-[4rem] z-[1] bg-white shadow-md">
                <div className="absolute bottom-0 w-full h-[1px] bg-gray-300 ">

                </div>
            </div>
            <div className="relative flex flex-row h-full w-full bg-sky-50">
                <div className="relative h-full w-[10rem] bg-white shadow-lg">
                    <div className="absolute right-0 w-[1px] h-full bg-gray-200 ">

                    </div>
                    <div className="absolute top-0 w-full h-[0px] bg-gray-300 ">

                    </div>
                </div>
                <div className="w-full h-full flex">

                </div>
            </div>
        </div>
    )
}