import { Link } from 'react-router-dom';


export default function Button() {
    return (
        <Link to="/#download-section">
            <button
                className="
                text-[1rem] hover:cursor-pointer hover:bg-hover  uppercase h-[3rem] font-bold w-[9.563rem] font-hubot-semicondensed
                 bg-primary text-black
                 
                   leading-1
                  "
            >
                pobierz apkę
            </button>
        </Link>
    );
}
