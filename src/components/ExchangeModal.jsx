import React from "react"
import clsx from "classnames"
import NumberFormat from "react-number-format"
import {ReactComponent as ExitIcon} from "../assets/exit-button.svg"

const ExchangeModal = ({active, onClose, selectedCurrency}) => {

    return(
      <div className={clsx("w-[95vw] md:w-auto translate-x-[-50%] fixed translate-y-[-50%] transition-all top-[50%] left-[50%] modal z-[103] pointer-events-none opacity-0 p-4 md:p-[56px]",{"pointer-events-auto opacity-100":active})}>
        <button onClick={onClose} className="absolute top-[20px] right-[25px] md:!px-4 md:!py-2 !py-1 !px-2">
            <ExitIcon className="h-[20px]"/>
        </button>
        <h1 className="text-center gradient-text md:leading-[1.5] text-lg md:text-[50px] mb-5 md:mb-[26px]">Buy $FD3 with {selectedCurrency}</h1>
       <p className="mt-4 md:mt-[26px] text-center max-w-[810px] text-sm text-white md:text-xl md:leading-[25px] tracking-[0.2px] mb-[23px]">
       You can use the popup below to buy MSH in the presale - you'll be able to claim your $FD3 once the presale ends. If buying the minimum of 1,000 MSH, please ensure you have at least 0.01 ETH to cover the cost of the purchase plus the gas fees.
       </p>
       <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between py-[11px] px-[14px] bg-[#D9D9D9] rounded-[5px]">
            <NumberFormat className="text-2xl tracking-[0.2px] max-w-[60%] text-black bg-transparent outline-none" thousandSeparator=","/>
            <p className="ml-4 text-xl tracking-[0.2px] text-black flex-shrink-0">$FD3</p>
        </div>
        <div className="flex items-center justify-between py-[11px] px-[14px] bg-[#D9D9D9] rounded-[5px]">
            <NumberFormat className="text-2xl tracking-[0.2px] max-w-[60%] text-black bg-transparent outline-none" thousandSeparator=","/>
            <p className="ml-4 text-xl tracking-[0.2px] text-black flex-shrink-0">{selectedCurrency}</p>
        </div>
        <div className="mt-5 md:mt-[39px] flex items-center justify-center">
            <button onClick={onClose}>Buy $FD3</button>
        </div>
       </div>
      </div>
    )
}

export default ExchangeModal