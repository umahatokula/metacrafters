import {useState, useEffect} from "react";
import {BigNumber, ethers} from "ethers";
import CONTRACT_ABI from '../../artifacts/contracts/TokenVesting.sol/TokenVesting.json'
import { CONTRACT_ADDRESS } from "../../constants";
import { getDaysFromTodayEpoch } from "../../lib/utils";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  
  // Organization vars
  const [tokenContract, setTokenContract] = useState('');
  const [name, setName] = useState('');

  // Stakeholder vars
  const [organization, setOrganization] = useState('');
  const [stakeholderAddress, setStakeholderAddress] = useState('');
  const [vestingPeriod, setVestingPeriod] = useState('');
  const [totalTokens, setTotalTokens] = useState('');

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

  const registerOrg = async (e) => {
    e.preventDefault();
    console.log('account', account)
    console.log('contract', contract)

    // try{
      let tx = await contract.registerOrganization(tokenContract, name)
      tx = await tx.wait()
      console.log("🚀 ~ file: index.js:14 ~ registerOrg ~ tx:", tx)
      
      alert("Added successfully")

    // } catch (error) {
    //   console.log(error, "error");
    //   throw new Error("Error while staking");
    // }
  }

  const addStakeHolder = async (e) => {
    e.preventDefault();
    console.log('account', account)
    console.log('contract', contract)
    console.log('stakeholderAddress', stakeholderAddress)
    const _vestingPeriod = getDaysFromTodayEpoch(vestingPeriod)
    const totalTokens_BN = ethers.utils.parseEther(totalTokens.toString());

    // try{
      let tx = await contract.addStakeHolder(account[0], stakeholderAddress.toString(), _vestingPeriod, totalTokens_BN)
      tx = await tx.wait()
      console.log("🚀 ~ file: index.js:14 ~ registerOrg ~ tx:", tx)

      alert("Added successfully")

    // } catch (error) {
    //   console.log(error, "error");
    //   throw new Error("Error while staking");
    // }
  }

  const whitelistAddress = async (e) => {
    e.preventDefault();
    console.log('account', account)
    console.log('contract', contract)
    console.log('stakeholderAddress', stakeholderAddress)
    const _vestingPeriod = getDaysFromTodayEpoch(vestingPeriod)

    // try{
      let tx = await contract.whitelistAddress(stakeholderAddress.toString(), _vestingPeriod)
      tx = await tx.wait()
      console.log("🚀 ~ file: index.js:14 ~ registerOrg ~ tx:", tx)

      alert("Added successfully")

    // } catch (error) {
    //   console.log(error, "error");
    //   throw new Error("Error while staking");
    // }
  }

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
      <div className="grid grid-cols-2 gap-16">

        <div>
          <h4 className="text-2xl font-bold">Register Organization</h4>
          <form className="max-w-md mx-auto bg-slate-500 shadow-md rounded px-8 py-6" onSubmit={registerOrg}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Organisation Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Organisation Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
              Contract Token
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vesting Period"
              placeholder="Contract Token Address"
              value={tokenContract}
              onChange={(e) => setTokenContract(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Organization
            </button>
          </div>
          </form>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold">Add Stakeholder</h4>
          <form className="max-w-md mx-auto bg-slate-500 shadow-md rounded px-8 py-6" onSubmit={addStakeHolder}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                Stakeholder address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vesting Period"
                placeholder="Stakeholder Address"
                value={stakeholderAddress}
                onChange={(e) => setStakeholderAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Vesting Period
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="number"
                placeholder="Vesting period in days"
                value={vestingPeriod}
                onChange={(e) => setVestingPeriod(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Amount of Token
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Amount"
                value={totalTokens}
                onChange={(e) => setTotalTokens(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Stakeholder
              </button>
            </div>
          </form>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold">Whitelist Stakeholder</h4>
          <form className="max-w-md mx-auto bg-slate-500 shadow-md rounded px-8 py-6" onSubmit={whitelistAddress}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                Stakeholder address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vesting Period"
                placeholder="Stakeholder Address"
                value={stakeholderAddress}
                onChange={(e) => setStakeholderAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Vesting Period
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="number"
                placeholder="Vesting period in days"
                value={vestingPeriod}
                onChange={(e) => setVestingPeriod(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Whitelist Stakeholder
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