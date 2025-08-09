export default function RankingSecond() {
    return (
        <article className="flex flex-col border  space-y-7  items-center font-hubot-semicondensed px-4 pt-10 md:pt-14 container min-h-[100dvh] max-w-[1400px] w-full mx-auto justify-start">
            <figure className="h-full border  flex w-full lg:flex-row lg:space-x-6   lg:space-y-0   space-y-9 flex-col items-start justify-center">
                <section
                    className="
                text-base space-y-5.5 lg:w-1/2  md:w-full flex items-start flex-col justify-center h-auto w-full
                "
                >
                    <h2
                        className="
                        
                    font-bold leading-[1.5] text-[clamp(28px,1vw,30px)]
                    
                    "
                    >
                        Ranking kolejki
                    </h2>
                    <div
                        className=" lg:flex-row lg:justify-between lg:items-center md:space-y-2 lg:space-y-0  space-y-1 p-4 flex flex-col justify-start items-start font-hubot-semicondensed w-full mx-auto bg-seconday min-h-[116px]  lg:min-h-[64px]  
                        
                     "
                    >
                        <div className="flex space-y-1 lg:space-y-0 lg:space-x-1 lg:flex-row lg:items-center  flex-col justify-center items-start">
                            <span
                                className="
                            text-xl text-primary font-bold leading-[100%]
                            
                            "
                            >
                                1.
                            </span>
                            <span
                                className="
                            text-[clamp(14px,1.5vw,15px)] leading-[1.5] font-medium text-base
                           
                            "
                            >
                                Bon do wykorzystania w Media Expert
                            </span>
                        </div>
                        <span className="font-bold text-2xl leding-[1.5]">500 zł</span>
                    </div>
                </section>

                {/* section second */}
                <section className="text-base lg:w-1/2 md:w-full w-full md:space-y-9 lg:space-y-0 lg:gap-[1.4rem] space-y-3.5 flex items-start flex-col justify-center h-auto ">
                    <h2 className="font-bold leading-[1.5] text-[clamp(28px,1vw,29px)]">
                        Ranking klubowy (miesięczny)
                    </h2>

                    {[1, 2, 3].map((_item, index) => (
                        <div className="max-w-[min(800px,100%)] lg:flex-row lg:justify-between lg:items-center md:space-y-2 lg:space-y-0  space-y-1 p-4 flex flex-col justify-start items-start font-hubot-semicondensed w-full mx-auto bg-seconday min-h-[116px]  lg:min-h-[64px]  ">
                            <div className="flex space-y-1 lg:space-y-0 lg:space-x-1 lg:flex-row lg:items-center  flex-col justify-center items-start">
                                <span className="text-xl md:text-xl  text-primary font-bold leading-[100%]">
                                    {index + 1}.
                                </span>
                                <span
                                    className="text-[clamp(14px,1.5vw,15px)] leading-[1.5] font-medium text-base
                            md:text-[clamp(14px,1vw,16px)]"
                                >
                                    Bon do wykorzystania w Media Expert
                                    <br />+ Wkład Klubu/Ligi
                                </span>
                            </div>
                            <span className="font-bold text-2xl  leding-[1.5]">500 zł</span>
                        </div>
                    ))}
                </section>
            </figure>
        </article>
    );
}
