import Jersey from '../assets/jersey-back.png';
export default function Footer() {
    return (
        <footer className="max-w-[1400px] flex p-5 justify-center items-center  container mx-auto w-full min-h-[100dvh] ">
            <section className="max-w-[1360px] p-4 gap-5 flex flex-col  bg-seconday min-h-[30rem] w-full mx-auto">
                {/* W 1 dzien */}
                <div className="flex p-1 text-base h-[7rem] w-full justify-center flex-col  bg-[#343434] ">
                    <span className="bg-primary flex justify-center items-center h-full w-full text-center text-xl font-bold leading-[1.5] text-black">
                        W 1 dzień
                    </span>
                    <span className="h-full font-medium text-lg leading-[1.5] flex justify-center items-center h w-full">
                        Wdrożenie na Twoich kanałach!
                    </span>
                </div>

                {/* heading and image */}
                <div className="w-full  flex mx-auto  justify-between items-center flex-col gap-4  max-w-[20.0625rem] min-h-[35vh]  ">
                    <h2 className="font-bold h-fit text-[clamp(1.50rem,1.5rem,1.75rem)] text-base leading-[1.5]">
                        Chcesz zostać Partnerem Foova FC?
                    </h2>
                    <img
                        className="object-contain h-auto max-w-max w-[57%]"
                        src={Jersey}
                        alt="jersey"
                    />
                </div>

                {/* email section */}
                <div className="text-base h-[4rem]  flex justify-center flex-col items-start">
                    <p className="text-xl font-medium leading-[1.5]">Napisz do nas:</p>
                    <p className="font-bold text-[clamp(1.5rem,1.2rem,1.5rem)] leading-[1.5] underline ">
                        partners@foova.org
                    </p>
                </div>
                {/* footer section */}
                <div className="max-w-[20.0625rem] w-full gap-2 flex flex-col justify-end items-center text-base h-[7.3rem]  border-b-0 border-x-0 border border-t-[#FFFFFF4D] ">
                    <p className="font-medium text-[1rem] flex items-center justify-center leading-[1.5] ">
                        © FOOVA 2025
                    </p>

                    <div className="flex flex-col items-center justify-center">
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
