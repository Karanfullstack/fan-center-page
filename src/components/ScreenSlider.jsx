import screen1 from '../assets/screens-png/Screen-1.png';
import CardVector from '../assets/Card-Vector.svg';
export default function ScreenSlider() {
    return (
        <article className="max-w-[1400px] relative pt-10 px-5 flex justify-center items-center w-full  h-[100dvh]">
            <figure
                className="max-w-xs relative flex items-center  justify-between flex-col bg-seconday p-4 w-full h-[31.1rem]"
                style={{
                    backgroundImage: `url(${CardVector})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {/*  heading section */}
                <section className="flex w-full h-auto items-center  ">
                    <h4 className="text-base text-xl font-bold break-words">
                        Zbieraj punkty w predykcjach przed i w trakcie meczu!
                    </h4>
                </section>

                {/* screen section */}
                <section className="w-xs absolute bottom-0 h-[75%] flex    ">
                    <img
                        src={screen1}
                        alt="Screen 1"
                        className="  object-cover flex justify-end "
                    />
                </section>
            </figure>
        </article>
    );
}
