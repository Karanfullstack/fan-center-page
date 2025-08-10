import CardVector from '../assets/Card-Vector.svg';
export default function ScreenSlider({ data }) {
    return (
        <figure
            className="w-xs relative flex items-center  justify-between flex-col bg-seconday p-4 h-[31.1rem]"
            style={{
                backgroundImage: `url(${CardVector})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/*  heading section */}
            <section className="flex w-full h-auto items-center  ">
                <h4 className="text-base text-xl font-bold break-words">{data.text}</h4>
            </section>

            {/* screen section */}
            <section className="w-xs absolute bottom-0 h-[75%] flex">
                <img src={data.image} alt="Screen 1" className="  object-cover flex justify-end " />
            </section>
        </figure>
    );
}
