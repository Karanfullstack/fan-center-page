export default function RankingSecond() {
    return (
        <article className="flex flex-col space-y-7 items-center font-hubot-semicondensed px-5 pt-10 md:pt-14 container min-h-[100dvh] mx-w-[1400px] w-full mx-auto justify-start">
            <figure className="h-full flex w-full  space-y-9 flex-col items-start justify-center">
                <section
                    className="
                text-base   space-y-5.5 flex items-start flex-col justify-center h-fit w-full"
                >
                    <h2 className="font-bold leading-[1.5] text-[clamp(28px,2vw,29px)] md:text-[clamp(42px,4vw,44px)]">
                        Ranking kolejki
                    </h2>
                    <div
                        className="max-w-[min(800px,100%)]  w-full  space-y-1 p-4 flex flex-col justify-start items-start font-hubot-semicondensed mx-auto bg-seconday h-[116px] md:h-[140px] 
                        
                     "
                    >
                        <div className="flex space-y-1 md:space-y-2  flex-col justify-center items-start">
                            <span
                                className="
                            text-xl text-primary font-bold leading-[100%]
                            md:text-2xl
                            
                            "
                            >
                                1.
                            </span>
                            <span
                                className="
                            text-[clamp(14px,1.5vw,15px)] leading-[1.5] font-medium text-base
                            md:text-[clamp(20px,2vw,22px)]
                            "
                            >
                                Bon do wykorzystania w Media Expert
                            </span>
                        </div>
                        <span className="font-bold   text-2xl md:text-3xl leding-[1.5]">
                            500 zł
                        </span>
                    </div>
                </section>

                <section className="text-base md:space-y-9  space-y-3.5 flex items-start flex-col justify-center h-fit w-full  ">
                    <h2 className="font-bold leading-[1.5] text-[clamp(28px,2vw,29px)] md:text-[clamp(42px,4vw,44px)]">
                        Ranking klubowy (miesięczny)
                    </h2>

                    {[1, 2, 3].map((_item, index) => (
                        <div className="max-w-[min(800px,100%)] md:space-y-2 space-y-1 p-4 flex flex-col justify-start items-start font-hubot-semicondensed w-full mx-auto bg-seconday h-[116px] md:h-[140px] ">
                            <div className="flex space-y-1  flex-col justify-center items-start">
                                <span className="text-xl md:text-2xl  text-primary font-bold leading-[100%]">
                                    {index + 1}.
                                </span>
                                <span
                                    className="text-[clamp(14px,1.5vw,15px)] leading-[1.5] font-medium text-base
                            md:text-[clamp(20px,2vw,22px)]"
                                >
                                    Bon do wykorzystania w Media Expert
                                </span>
                            </div>
                            <span className="font-bold  text-2xl md:text-3xl leding-[1.5]">
                                500 zł
                            </span>
                        </div>
                    ))}
                </section>
            </figure>
        </article>
    );
}
