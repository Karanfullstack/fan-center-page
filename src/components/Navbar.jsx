import MobileLogo from '../assets/mobileversionLogo.png';
import DesktopLogo from '../assets/Vector.svg';
import Button from '../components/common/Button';
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
            <section className="flex items-center w-[156px] h-[48px] justify-end ">
                <Button />
            </section>
        </nav>
    );
}
