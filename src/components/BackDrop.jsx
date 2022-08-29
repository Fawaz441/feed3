import React from "react"
import clsx from "classnames"

const BackDrop = ({active, onClick}) => {

    return(
        <div className={clsx("pointer-events-none h-screen w-screen top-0 left-0 fixed opacity-0 transition-all", {"pointer-events-auto z-[102] opacity-100 bg-black/[0.8]":active})} onClick={onClick}>
        
        </div>
    )
}

export default BackDrop