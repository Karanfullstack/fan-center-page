import { Left, Right } from '../../assets/Arrow';

export default function ArrowNavigation({ handlePrev, isBeginning, handleNext, isEnd }) {
    return (
        <div className="w-[92px]  h-[48px] flex gap-0 items-center justify-between   shadow-sm bg-[#232323]">
            <button
                onClick={handlePrev}
                className={`w-[40px] h-[40px] flex items-center justify-center  transition-all duration-200 ease-in-out ${
                    isBeginning
                        ? 'bg-[#232323] opacity-40 cursor-not-allowed'
                        : 'bg-[#DBFD01] cursor-pointer hover:bg-[#DBFD01]'
                }`}
                aria-label="Previous slide"
                disabled={isBeginning}
            >
                <div className="w-4  flex justify-center items-center h-4">
                    <Left size={16} fill={isBeginning ? '#B0B0B0' : '#000000'} />
                </div>
            </button>

            <button
                onClick={handleNext}
                className={`w-[40px] h-[40px] flex items-center justify-center  transition-all duration-200 ease-in-out ${
                    isEnd
                        ? 'bg-[#232323] opacity-40 cursor-not-allowed'
                        : 'bg-[#DBFD01] cursor-pointer hover:bg-[#DBFD01]'
                }`}
                aria-label="Next slide"
                disabled={isEnd}
            >
                <div className="w-4 h-4 flex justify-center items-center rotate-180">
                    <Right fill={isEnd ? '#B0B0B0' : '#000000'} />
                </div>
            </button>
        </div>
    );
}
