import MobileLogo from '../assets/mobileversionLogo.png';
import DesktopLogo from '../assets/Vector.svg';
export default function Navbar() {
    return (
        <nav className=" font-bold p-base mx-auto w-full  max-h-[88px] h-full flex justify-between items-center text-white">
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
            <section className="flex items-center   w-[156px] h-[48px] justify-end ">
                <button
                    className="
                text-[1.05rem] uppercase w-full h-full font-hubot-semicondensed
                 bg-primary text-black
                  
                 
                   leading-1
                  "
                >
                    pobierz apkę
                </button>
            </section>
        </nav>
    );
}
