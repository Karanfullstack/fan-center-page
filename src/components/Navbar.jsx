import MobileLogo from '../assets/mobileversionLogo.png';
import DesktopLogo from '../assets/Vector.svg';
export default function Navbar() {
    return (
        <nav className=" font-bold p-base mx-auto  max-h-[88px] h-full flex justify-between items-center text-white">
            <section>
                <img
                    className="w-full lg:hidden h-auto md:max-w-[clamp(4rem,3vw,4rem)]"
                    src={MobileLogo}
                    alt="mobile_logo"
                />

                <img
                    className="w-full hidden md:hidden lg:block h-auto md:max-w-[clamp(13rem,3vw,4rem)]"
                    src={DesktopLogo}
                    alt="mobile_logo"
                />
            </section>
            <section>
                <button
                    className="leading-none 
                text-[1.05rem] uppercase font-hubot-semicondensed
                 bg-primary text-black
                  px-[clamp(1.30rem,1.40rem,1.40rem)] 
                  py-[clamp(1rem,1.10rem,1.10rem)]
                  font-bold leding-1
                  "
                >
                    pobierz apkę
                </button>
            </section>
        </nav>
    );
}
