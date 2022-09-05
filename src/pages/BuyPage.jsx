import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "classnames"
import line from "../assets/line.svg"
import star from "../assets/pink-star.svg"
import { ReactComponent as StepTwo } from "../assets/waver.svg";
import {ReactComponent as Ellipse} from "../assets/ellipse.svg"
import {ReactComponent as Floater} from "../assets/buy-steps/floater.svg"
import {ReactComponent as Line} from "../assets/buy-steps/step-line.svg"
import { buySteps } from "../utils/constants";
import ProviderSelectModal from "../components/ProviderSelectModal";
import BackDrop from "../components/BackDrop";
import ExchangeModal from "../components/ExchangeModal";


const BuyPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isBuyPage  = location.pathname === "/buy/options"
    const currencies = ["ETH", "BNB"]
    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [showExchangeModal, setShowExchangeModal] = useState(false)
    const [showProviderModal, setShowProviderModal] = useState(false)
    const [, setSelectedWalletMode] = useState(null)
    const hideProviderModal = () => setShowProviderModal(false)
    const hideExchangeModal = () => {
        setShowExchangeModal(false)
        setTimeout(()=>{
            setSelectedCurrency(null)
        },500)
    }

    const onSelectWalletMode = (walletMode) => {
        setSelectedWalletMode(walletMode)
        hideProviderModal()
        navigate("/buy/options")
        document.getElementById("currencies-btns")?.scrollIntoView()
    }

    useEffect(() => {
        setShowExchangeModal(!!selectedCurrency)
    },[selectedCurrency])

    return(
    <div className='app-container !max-w-[100vw] !p-0 relative'>
        <div className="absolute top-[-289px] right-0">
            <Ellipse/>
        </div>
        <div className="absolute top-[507px] right-[-220px]">
            <Ellipse/>
        </div>
        <div className="absolute bottom-[100px] right-[-220px]">
            <Ellipse/>
        </div>
        <ProviderSelectModal active={showProviderModal} onClose={hideProviderModal} onSelect={onSelectWalletMode}/>
        <ExchangeModal active={showExchangeModal} onClose={hideExchangeModal} selectedCurrency={selectedCurrency}/>
        <BackDrop onClick={()=>{
            if(showExchangeModal){
                hideExchangeModal()
            }
            if(showProviderModal){
                hideProviderModal()
            }
        }} active={showProviderModal||showExchangeModal}/>
        <div className="mt-[105px] md:mt-[100px] flex flex-col space-y-[9px] items-center justify-center pb-[30px] md:pb-[137px] relative">
            <h6 className="text-xs md:text-xl text-white text-center">Home &gt; How To Buy</h6>
            <h3 className="text-[33px] md:text-7xl text-center tracking-[0.2px] gradient-text md:leading-[1.5]">Buy FD3</h3>
            <img src={star} alt="star" className="absolute bottom-[-63px] left-[16px] md:bottom-[34px] right-[93.5px] md:left-auto"/>
        </div>
        <img src={line} alt="line" className="pointer-events-none md:ml-[-4rem] md:mr-[-4rem] md:max-w-[screen]"/>
        <div className="px-4 mt-[80px] md:mt-[163px] mb-[167px]">
            <div className="flex flex-col space-y-5 md:space-y-[57px]">
                <h2 className="gradient-text text-[25px] md:text-[50px] text-center">Get In Early</h2>
                <p className="text-white text-base md:text-[24px] text-center leading-[34px] max-w-[1180px] mx-auto">
                $FD3 is the feedback-to-earn token in the Feed3 ecosystem and is a core catalyst for taking games of all sizes to the next level of engagement. It couldn’t be easier to get your hands on our token via our presale. Use the steps below to purchase $FD3.
                </p>
                {isBuyPage ? 
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0" id="currencies-btns">
                    {currencies.map((currency, index) => (
                        <button className="w-fit" key={index} onClick={()=>setSelectedCurrency(currency)}>{`Buy with ${currency}`}</button>
                    ))}
                </div>
            :
            <div className="flex space-y-4 flex-col md:flex-row items-center md:space-y-0 md:space-x-[47px] justify-center">
                <button onClick={()=> setShowProviderModal(true)} className="w-[225px] h-[62px] flex text-center items-center justify-center">Buy</button>
                <button onClick={()=> setShowProviderModal(true)} className="w-[225px] h-[62px] in gradient-div">How To Buy</button>
            </div>
            }
            </div>
        </div>
        {!isBuyPage && 
        <>
        <div className="flex flex-col space-y-5 px-4 lg:space-y-0 lg:flex-row lg:space-x-[58px] justify-center">
            <div className="rounded-[10px] bg-[#B936EE]/[.1] md:px-[61px] md:pt-[52px] md:pb-[44px] p-4 flex flex-col items-center">
                <h2 className="text-center text-[25px] md:text-[50px] gradient-text leading-[62.5px]">
                Presale<br/>Ends Soon
                </h2>
                <p className="mt-5 md:mt-[70px] text-center text-white text-xl md:text-[27px]">1 USDT = 10000.00 #FD3</p>
                <button className="mt-5 md:mt-[77px]" onClick={()=> setShowProviderModal(true)}>Connect Wallet</button>
            </div>
            <div className="rounded-[10px] bg-[#B936EE]/[.1] p-5 md:p-[45px]">
                <div className="rounded-[20px] overflow-hidden md:w-[468px] h-[250px] mx-auto">
                    <StepTwo className="w-full md:w-[468px] h-full rect-fills"/>
                </div>
                <p className="mt-5 md:mt-[57px] text-white text-center text-sm md:text-base flex justify-center flex-col space-y-3 md:flex-row md:space-y-0"><span>USDT Raised:</span><span>$1,576,401.09/$1,950,000.00</span></p>
                <div className="mt-5 md:mt-[27px] w-full bordered-div px-[11px] py-[10px]">
                    <div className="relative bg-[#D9D9D9] rounded-[20px] h-[29px] overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-[65%] gradient-bg-bg rounded-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-[30px] md:pt-[141px] px-4">
            <h3 className="text-center gradient-text text-[28px] md:text-[50px] mb-[30px] md:mb-[70px]">How To Buy</h3>
            <div className="flex flex-col space-y-4 md:space-y-[54px] justify-center w-full mx-auto md:px-4">
                {buySteps.map((step,index) =>(
                    <div key={index}>
                    <div className={clsx("flex flex-col space-y-5 md:space-y-[30px] bordered-bottom pb-5 lg:pb-[73px] lg:space-y-0 lg:flex-row lg:space-x-[98px]",{"!lg:flex-row-reverse !lg:justify-end":((index+1)%2!==0)})}>
                        <div className="flex flex-col space-y-[59px] max-w-[724px]">
                            <h3 className="gradient-text text-xl md:text-[32px]">Step {index+1}/<span className="text-xl md:text-[38px]">{buySteps.length}</span></h3>
                            <div className="mt-4 md:mt-[59px] text-white text-base md:text-2xl max-w-[724px]">
                            {step.instructions.map((instruction, index) => (
                            <p key={index} className="text-white text-sm text-center md:text-left leading-[27px]">{instruction}</p>
                            ))}
                            </div>
                        </div>
                        <Floater className={clsx("mx-auto")} />
                    </div>
                   {index+1 !== buySteps.length && <Line/>}
                    </div>
                ))}
            </div>
        </div>
        </>
        }
        <div className="mt-[100px] md:mt-[286px] flex flex-col items-center justify-center mb-[100px] md:mb-[304px] px-4">
            <h2 className="gradient-text text-center text-[25px] md:text-[50px]">100% Secured</h2>
            <p className="mt-5 md:mt-[50px] text-white text-center max-w-[969px]">
            $FD3 is the feedback-to-earn token in the Feed3 ecosystem and is a core catalyst for taking games of all sizes to the next level of engagement. It couldn&apos;t be easier to get your hands on our token via our presale. Use the steps below to purchase $FD3.
            </p>
            <a href="https://feed3.gitbook.io/feed3/">
            <button className="mt-5 md:mt-[62px]">Whitepaper</button>
            </a>
        </div>
    </div>
    )
}


export default BuyPage