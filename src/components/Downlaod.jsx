import Glasses from '../assets/FOOVA-LP-cards/okularki-card.png';
import Stadium from '../assets/FOOVA-LP-cards/stadion-card.png';
import Puchar from '../assets/FOOVA-LP-cards/puchar-card.png';
import Pilka from '../assets/FOOVA-LP-cards/pilka-card.png';
import IPMan from '../assets/Layer_1.svg';
import DownloadApple from '../assets/downloadapple.svg';
import DownloadPlay from '../assets/downloadplay.svg';
export default function Downlaod() {
    return (
        <section className="max-w-[1400px]  flex-col relative flex items-center justify-center w-full  min-h-[100dvh]">
            <figure className="max-w-[353px]  flex flex-col h-[850px] justify-center items-center w-full">
                <div className="w-full flex  relative h-[240px]  items-center justify-center  ">
                    <img className="object-contain w-[65%]" src={IPMan} alt="ipman" />

                    <div className="absolute -top-27 left-0 max-w-[78px]">
                        <img className="h-auto w-auto" src={Stadium} alt="stadium" />
                    </div>

                    <div className="absolute -top-34 right-0 max-w-[78px]">
                        <img className="h-auto w-auto" src={Puchar} alt="stadium" />
                    </div>

                    <div className="absolute bottom-5 left-0 max-w-[78px]">
                        <img className="h-auto w-auto" src={Pilka} alt="stadium" />
                    </div>

                    <div className="absolute bottom-0 right-0 max-w-[78px]">
                        <img className="h-auto w-auto" src={Glasses} alt="stadium" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h2 className="text-base  text-[2.5rem] font-bold leading-[1.5]">
                        Dawaj do gry!
                    </h2>
                    <p className="font-medium  text-base leading-[1.5] text-xl">
                        Pobierz aplikację:
                    </p>

                    <div className="flex gap-3 items-center w-[150px] h-full  justify-center">
                        <img src={DownloadApple} alt="Download on the App Store" />
                        <img src={DownloadPlay} alt="Get it on Google Play" />
                    </div>
                </div>
            </figure>
        </section>
    );
}
