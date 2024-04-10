"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { connect, disconnect } from "starknetkit"

function Connect() {
  const [connection, setConnection] = useState('');
  const [account, setAccount] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const connectToStarknet = async () => {
      const { wallet }: any = await connect({ modalMode: "neverAsk", webWalletUrl: "https://web.argent.xyz" })

      if (wallet && wallet.isConnected) {
        setConnection(wallet)
        setAccount(wallet.account)
        setAddress(wallet.selectedAddress)
      }
      connectToStarknet()
    }
  }, [])

  const connectWallet = async () => {
    const { wallet }: any = await connect({ webWalletUrl: "https://web.argent.xyz" })

    if (wallet && wallet.isConnected) {
      setConnection(wallet)
      setAccount(wallet.account)
      setAddress(wallet.selectedAddress)
    }
  }

  const disconnectWallet = async () => {
    await disconnect()
    setConnection(undefined)
    setAccount(undefined)
    setAddress('')
  }

  return (
    <div>
      {
        !connection ?
          <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] px-16 py-3.5 rounded-lg text-white text-lg" onClick={connectWallet}>Connect</button>
          :
          <button className="bg-gradient-to-r from-[#F15A24] via-[#F15A24]/90 to-[#9E005D] px-16 py-3.5 rounded-lg text-white text-lg" onClick={disconnectWallet}>{address.slice(0, 5)}...{address.slice(60, 66)}</button>
      }
    </div>
  )
}

export default Connect