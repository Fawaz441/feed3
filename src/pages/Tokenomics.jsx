import React from 'react'
import Clients from '../components/Clients'
import Presale from '../components/Presale'
import Token from '../components/Token'
import TokenEllipse from '../components/TokenEllipse'
import Tokenomics from '../components/Tokenomics'

function TokenomicsPage() {
  return (
    <div>
      <Token/>
       <Tokenomics/>
       <Presale/>
       <Clients />
       <TokenEllipse />
    </div>
  )
}

export default TokenomicsPage