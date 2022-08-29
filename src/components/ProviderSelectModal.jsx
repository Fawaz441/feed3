import React from "react"
import clsx from "classnames"
import {ReactComponent as MetaMask} from "../assets/metamask.svg"
import {ReactComponent as Wallet} from "../assets/wallet.svg"
import {ReactComponent as ExitIcon} from "../assets/exit-button.svg"

const ProviderSelectModal = ({active, onClose, onSelect}) => {

    return(
      <div className={clsx("w-[95vw] md:w-auto translate-x-[-50%] fixed translate-y-[-50%] transition-all top-[50%] left-[50%] modal z-[103] pointer-events-none opacity-0 p-4 md:p-[56px]",{"pointer-events-auto opacity-100":active})}>
        <button onClick={onClose} className="absolute top-[20px] right-[25px] md:!px-4 md:!py-2 !py-1 !px-2">
            <ExitIcon/>
        </button>
        <h1 className="text-center gradient-text md:leading-[1.5] text-lg md:text-[50px] mb-[30px] md:mb-[130px]">Select Provider</h1>
        <div className="flex items-center justify-center space-x-[100px] md:space-x-[300px]">
            <div className="flex flex-col space-y-4 cursor-pointer items-center justify-center" onClick={(()=>onSelect("metamask"))}>
                <MetaMask className="w-[100px] md:w-auto"/>
                <span className="uppercase text-base md:text-[38px] font-semibold text-white text-center">metamask</span>
            </div>
            <div className="flex flex-col space-y-4 cursor-pointer items-center justify-center" onClick={(()=>onSelect("wallet"))}>
                <Wallet className="w-[100px] md:w-auto"/>
                <span className="capitalize text-base md:text-[38px] font-semibold text-white text-center">Wallet Connect</span>
            </div>
        </div>
      </div>
    )
}

export default ProviderSelectModal