export default function SlidersRanking({ prize }) {
    return (
        <figure className="w-[160px] p-4  flex  justify-center items-center bg-seconday h-[160px] md:h-[170px] lg:h-[200px] lg:w-[200px]  md:w-[170px]  aspect-square text-base  ">
            <section className="flex flex-col  w-full h-full justify-between items-start gap-3">
                <span className=" text-primary text-xl font-bold   leading-1">{prize.rank}.</span>

                <div className="flex flex-col h-[100px]   flex-wrap   items-start justify-start">
                    <span className="text-2xl font-bold leading-[1.5]">
                        {prize.amount} {prize.currency}
                    </span>
                    <span className="text-sm leading-[1.5] break-words font-medium">
                        {prize.description}
                    </span>
                </div>
            </section>
        </figure>
    );
}
