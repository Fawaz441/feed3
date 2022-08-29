import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import line from "../assets/line.svg"
import star from "../assets/pink-star.svg"
import {ReactComponent as Bot} from "../assets/bot.svg"
import bot from "../assets/bot.svg"
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
    }

    useEffect(() => {
        setShowExchangeModal(!!selectedCurrency)
    },[selectedCurrency])

    return(
    <div className='app-container !max-w-[100vw] !p-0 relative'>
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
            <h3 className="text-[33px] md:text-7xl text-center tracking-[0.2px] gradient-text md:leading-[1.5]">How to Buy</h3>
            <img src={star} alt="star" className="absolute bottom-[-63px] left-[16px] md:bottom-[34px] right-[93.5px] md:left-auto"/>
        </div>
        <img src={line} alt="line" className="pointer-events-none md:ml-[-4rem] md:mr-[-4rem] md:max-w-[screen]"/>
        <div className="lg:hidden">
            <h3 className="mt-[76px] gradient-text text-[27px] tracking-[0.2px] text-center">Get In Early </h3>
            <div className="mt-[55px] mb-[35px] flex items-center justify-center">
            <Bot className="h-[419.98px]"/>
            </div>
            <p className="text-white px-4 max-w-[365px] mb-[48px] text-sm tracking-[0.2px] text-center mx-auto">$FD3 is the feedback-to-earn token in the Feed3 ecosystem and is a core catalyst for taking games of all sizes to the next level of engagement. It couldn’t be easier to get your hands on our token via our presale. Use the steps below to purchase $FD3.</p>
            <div className="flex items-center justify-center mb-[110px]">
                {isBuyPage ? 
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    {currencies.map((currency, index) => (
                        <button key={index} onClick={()=>setSelectedCurrency(currency)}>{`Buy with ${currency}`}</button>
                    ))}
                </div>
            :
            <button onClick={()=> setShowProviderModal(true)} className="w-fit">Connect Wallet</button>
            }
            </div>
        </div>
        <div className="hidden lg:flex space-x-[99px] mt-[164px] mb-[140px]">
            <div className="flex flex-col space-y-[57px]">
                <h2 className="gradient-text text-[50px]">Get In Early</h2>
                <p className="text-white text-[24px] leading-[34px]">
                $FD3 is the feedback-to-earn token in the Feed3 ecosystem and is a core catalyst for taking games of all sizes to the next level of engagement. It couldn’t be easier to get your hands on our token via our presale. Use the steps below to purchase $FD3.
                </p>
                {isBuyPage ? 
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    {currencies.map((currency, index) => (
                        <button className="w-fit" key={index} onClick={()=>setSelectedCurrency(currency)}>{`Buy with ${currency}`}</button>
                    ))}
                </div>
            :
            <button onClick={()=> setShowProviderModal(true)} className="w-fit">Connect Wallet</button>
            }
            </div>
            <div className="min-w-[473px]">
            <img src={bot} alt="Robot" className="pointer-events-none"/>
            </div>
        </div>
        <div className="pb-[378px]">
            <h3 className="text-center gradient-text text-[28px] md:text-[50px] mb-[106px] md:mb-[70px]">How To Buy</h3>
            <div className="flex flex-col space-y-[54px] items-center justify-center w-[277px] mx-auto md:w-full md:px-4">
                {buySteps.map((step,index) =>(
                    <div key={index} className="flex flex-col space-y-[30px] md:space-y-[56px]">
                        <h2 className="text-[25px] md:text-[50px] gradient-text text-center">{step.name}</h2>
                    <div className={`flex flex-col gradient-div space-y-5 items-center justify-center rounded-none md:max-w-[1243px] xl:w-[1243px] md:space-y-0 md:justify-start ${index%2===0 ? 'md:flex-row':'md:flex-row-reverse'}`}>
                        <div className="h-[207px] w-full md:w-[279px]">
                            {step.image}
                        </div>
                        <div className="flex flex-col space-y-3 pt-[30px] pb-[48px] px-[25px] md:p-[30px]">{step.instructions.map((instruction, index) => (
                            <p key={index} className="text-white text-sm text-center md:text-left leading-[27px]">{instruction}</p>
                        ))}</div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}


export default BuyPage