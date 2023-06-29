import {useState, useEffect} from "react";
import {BigNumber, ethers} from "ethers";
import CONTRACT_ABI from '../artifacts/contracts/TokenVesting.sol/TokenVesting.json'
import { CONTRACT_ADDRESS } from "../constants";
import { getDaysFromTodayEpoch } from "../lib/utils";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);

  // Stakeholder vars
  const [organization, setOrganization] = useState('');
  const [stakeHolder, setStakeHolder] = useState('');

  const contractAddress = CONTRACT_ADDRESS;
  const ABI = CONTRACT_ABI.abi;

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
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const idmContract = new ethers.Contract(contractAddress, ABI, signer);
 
    setContract(idmContract);
  }

  const getStakeholder = async () => {
    try{
      let stakeHolder = await contract.getStakeholder();

      const formatted = {
        claimedTokens: ethers.utils.formatEther(stakeHolder?.claimedTokens),
        stakerAddress: stakeHolder?.stakerAddress,
        startTime    : stakeHolder?.startTime.toString(),
        totalTokens  : ethers.utils.formatEther(stakeHolder?.totalTokens),
        vestingPeriod: stakeHolder?.vestingPeriod.toString(),
      }
      console.log("🚀 ~ file: index.js:72 ~ getStakeholder ~ formatted:", formatted)
      setStakeHolder(formatted);

    } catch (error) {
      console.log(error, "error");
      throw new Error("Error while staking");
    }
  }

  const claimTokens = async (e) => {
    e.preventDefault();
    // try{
      let tx = await contract.claimTokens();
      tx = await tx.wait();

    // } catch (error) {
    //   console.log(error, "error");
    //   throw new Error("Error while staking");
    // }
  }

  useEffect(() => {
    if(!contract) return;
    getStakeholder();
  }, [contract])

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to continue</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button
          className='bg-stone-700 text-white py-3 px-6 rounded-lg'
          onClick={connectAccount}
        >
          Please connect your Metamask wallet
        </button>
      )
    }

    return (
      <div className="w-full">

        <div>
          <h4 className="text-2xl font-bold">Organization: {JSON.stringify(setStakeHolder, null, 2)}</h4>
          <form className="max-w-md mx-auto px-8 py-6" onSubmit={claimTokens}>
            <div className="flex items-center justify-center">
              <button
                className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Claim my Tokens
              </button>
            </div>
          </form>
        </div>

      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header className="my-16">
        <h1 className="text-3xl font-extrabold">Welcome to our VESTING Platform!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}