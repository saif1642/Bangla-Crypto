import React, { useEffect , useState } from "react";
import { ethers } from 'ethers';

import { contractAbi,  contractAddress } from '../utils/constant';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractAbi,signer);


    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount , setCurrentAccount] = useState("");
    const checkWalletConnection = async () => {
        try {
            if(!ethereum) return alert('Please install metamask for wallet');

            const accounts = await ethereum.request({ method: 'eth_accounts'});

            if(accounts.length){
                setCurrentAccount(accounts[0]);

                // Get All Transaction
            }else{
                console.log("No Account Found")
            }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum Object!")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install metamask for wallet');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum Object!")
        }
    }

    useEffect(()=>{
        checkWalletConnection();
    },[]);

    return (
        <TransactionContext.Provider value={{ connectWallet,currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )
}  