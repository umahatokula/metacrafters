import { CONTRACT_ADDRESS } from '../constants';
import CONTRACT_ABI from '../artifacts/contracts/TokenVesting.sol/TokenVesting.json';
import { useCallback, useEffect, useState } from 'react'
import AppContext from './AppContext';
import { ethers } from 'ethers';

export function ContextWrapper({children}) {

    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [contract, setContract] = useState(undefined);

    const getWallet = async() => {
        if (window.ethereum) {
        setEthWallet(window.ethereum);
        }

        if (ethWallet) {
        const account = await ethWallet.request({method: "eth_accounts"});
        handleAccount(account);
        }
    }

    const handleAccount = (account) => {
        if (account) {
        console.log ("Account connected: ", account);
        setAccount(account);
        }
        else {
        console.log("No account found");
        }
    }

    const connectAccount = async() => {
        if (!ethWallet) {
        alert('MetaMask wallet is required to connect');
        return;
        }
    
        const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
        handleAccount(accounts);
        
        // once wallet is set we can get a reference to our deployed contract
        getContract();
    };

    const getContract = () => {
        console.log('CONTRACT_ABI', CONTRACT_ABI)

        const provider = new ethers.providers.Web3Provider(ethWallet);
        const signer = provider.getSigner();
        const contractObj = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, signer);
        console.log("🚀 ~ file: ContextWrapper.js:53 ~ getContract ~ contractObj:", contractObj)
    
        setContract(contractObj);
    }

    useEffect(() => {getWallet();}, []);

    return <AppContext.Provider value={{ 
        ethWallet,
        account,
        contract,
        connectAccount,
     }}>
        {children}
    </AppContext.Provider>
}