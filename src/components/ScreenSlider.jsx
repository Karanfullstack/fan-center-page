import CardVector from '../assets/Card-Vector.svg';
export default function ScreenSlider({ data }) {
    return (
        <figure
            className="w-xs  relative lg:w-[27rem] lg:h-[40rem] flex items-center  justify-between flex-col bg-seconday p-4 h-[31.1rem] md:w-[25rem] md:h-[38rem]
           
            "
            style={{
                backgroundImage: `url(${CardVector})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/*  heading section */}
            <section className="flex w-full md:p-1 h-auto items-center  ">
                <h4 className="text-base text-xl  md:text-[1.5rem] lg:text-[1.70rem] leading-[1.5] font-bold break-words">
                    {data.text}
                </h4>
            </section>

            {/* screen section */}
            <section className="w-xs md:w-[24rem]  absolute bottom-0 h-[75%] lg:h-[70%] flex">
                <img src={data.image} alt="Screen 1" className="  object-cover flex justify-end " />
            </section>
        </figure>
    );
}
