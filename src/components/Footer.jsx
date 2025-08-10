import Jersey from '../assets/jersey-back.png';
import Vector from '../assets/footer/FOOVA.png';
export default function Footer() {
    return (
        <footer className="max-w-[1400px]  flex p-5 justify-center md:p-10 md:items-end items-center  container mx-auto w-full  min-h-[100dvh]  ">
            <section
                className="max-w-[1360px] p-4 md:p-8 gap-5 flex flex-col  bg-seconday min-h-[30rem] md:min-h-[581px] w-full mx-auto"
                style={{
                    backgroundImage: `url(${Vector})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* W 1 dzien */}
                <div className="flex p-1 md:flex-row md:h-[67px] text-base h-[7rem] md:max-w-[484px] w-full justify-center md:gap-3 flex-col md:pt-1 md:pr-2 md:pl-0  bg-[#343434] ">
                    <span className="bg-primary  flex justify-center items-center h-full w-full md:w-[151px] md:h-[59px]  text-center text-xl md:text-2xl font-bold leading-[1.5] text-black">
                        W 1 dzień
                    </span>
                    <span className="h-full  font-medium md:w-auto text-lg md:text-[1.25rem] leading-[1.5] flex justify-center items-center h w-full">
                        Wdrożenie na Twoich kanałach!
                    </span>
                </div>

                {/* heading and image */}
                <div className="w-full flex mx-auto  md:flex-row justify-between items-start md:items-center flex-col md:min-h-[280px]  gap-4 md:max-w-max max-w-[20.0625rem] lg:max-w-full lg:min-h-[205px] min-h-[35vh]  ">
                    <h2 className="font-bold lg:break-words  h-fit text-[clamp(1.50rem,1.5rem,1.75rem)] lg:text-[4rem] md:text-[2.7rem] text-base leading-[1.5]">
                        Chcesz zostać <br /> Partnerem Foova FC?
                    </h2>
                    <img
                        className="object-contain h-auto flex self-center lg:max-w-max max-w-max w-[57%]"
                        src={Jersey}
                        alt="jersey"
                    />
                </div>

                {/* email section */}
                <div className="text-base h-[4rem]  md:h-auto flex justify-center flex-col items-start">
                    <p className="text-xl md:text-2xl lg:text-xl font-medium leading-[1.5]">
                        Napisz do nas:
                    </p>
                    <p className="font-bold lg:text-[4rem] text-[clamp(1.5rem,1.2rem,1.5rem)] leading-[1.5] underline md:text-[1.9rem] ">
                        partners@foova.org
                    </p>
                </div>
                {/* footer section */}
                <div className="max-w-[20.0625rem] lg:flex-grow lg:flex-row lg:justify-between  md:max-w-full md:w-full w-full gap-2 flex flex-col justify-end items-center text-base h-[7.3rem] lg:h-auto  border-b-0 border-x-0 border border-t-[#FFFFFF4D] lg:items-end   ">
                    <p className="font-medium text-[1rem] flex items-center justify-center leading-[1.5] ">
                        © FOOVA 2025
                    </p>

                    <div className="flex flex-col lg:flex-row lg:justify-between space-x-4  items-center justify-center">
                        <p className="font-medium text-[1rem] leading-[1.5] ">Regulamin</p>
                        <p className="font-medium text-[1rem] leading-[1.5] ">
                            Polityka Prytwatności
                        </p>
                        <p className="font-medium text-[1rem] leading-[1.5] ">
                            Informacje o Usunięciu Konta
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}
