import Glasses from '../assets/FOOVA-LP-cards/okularki-card.png';
import Stadium from '../assets/FOOVA-LP-cards/stadion-card.png';
import Puchar from '../assets/FOOVA-LP-cards/puchar-card.png';
import Pilka from '../assets/FOOVA-LP-cards/pilka-card.png';
import IPMan from '../assets/Layer_1.svg';
import DownloadApple from '../assets/downloadapple.svg';
import DownloadPlay from '../assets/downloadplay.svg';
export default function Downlaod() {
    return (
        <section className="max-w-[1400px]  flex-col relative flex items-center justify-center w-full  h-[100vh]">
            <figure className="max-w-full md:space-y-7 lg:space-y-0 lg:gap-0 gap-4 pt-26  lg:w-[1200px] lg:h-full  md:w-[800px]  flex flex-col h-[700px] md:h-[850px]  justify-center items-center w-full">
                <div className="w-full flex lg:pt-10  relative h-[340px]   items-center justify-center  ">
                    <img
                        className="object-contain  md:w-[273px] w-[60%]"
                        src={IPMan}
                        alt="ipman"
                    />

                    <div className="absolute lg:-top-30 lg:left-12  md:-top-40 -top-15 left-0 md:max-w-[140px]  max-w-[85px]">
                        <img className="h-auto w-auto" src={Stadium} alt="stadium" />
                    </div>

                    <div className="absolute lg:-top-20 lg:right-30 md:-top-49 -top-20 right-0 md:max-w-[140px] max-w-[85px]">
                        <img className="h-auto w-auto" src={Puchar} alt="stadium" />
                    </div>

                    <div className="absolute lg:-bottom-40 md:-bottom-10 bottom-10 left-0 md:max-w-[140px] max-w-[85px]">
                        <img className="h-auto w-auto" src={Pilka} alt="stadium" />
                    </div>

                    <div className="absolute lg:-bottom-34 md:-bottom-10 bottom-5 right-0 md:max-w-[140px] max-w-[85px]">
                        <img className="h-auto w-auto" src={Glasses} alt="stadium" />
                    </div>
                </div>
                <div className="flex flex-col  lg:gap-5 gap-3 md:gap-4 justify-center items-center">
                    <h2 className="text-base md:text-[3.5rem] lg:text-[4rem]  text-[2.5rem] font-bold leading-[1.5]">
                        Dawaj do gry!
                    </h2>
                    <p className="font-medium    text-base leading-[1.5] text-xl">
                        Pobierz aplikację:
                    </p>

                    <div className="flex gap-3 items-center w-full lg:max-w-[270px]  md:max-w-[280px] max-w-[170px] h-full  justify-center">
                        <img src={DownloadApple} alt="Download on the App Store" />
                        <img src={DownloadPlay} alt="Get it on Google Play" />
                    </div>
                </div>
            </figure>
        </section>
    );
}
