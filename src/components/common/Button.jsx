import { useNavigate } from 'react-router-dom';

export default function Button() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate('/#download-section')}
            className="
                text-[1rem] hover:cursor-pointer hover:bg-hover  uppercase h-[3rem] font-bold w-[9.563rem] font-hubot-semicondensed
                 bg-primary text-black
                 
                   leading-1
                  "
        >
            pobierz apkę
        </button>
    );
}
