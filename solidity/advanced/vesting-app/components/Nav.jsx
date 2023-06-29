import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext';
import Link from 'next/link';

function Nav() {
    const { ethWallet, account, contract, connectAccount } = useContext(AppContext);
    return (
        <div className='h-20 relative w-full p-4'>
            <div className='flex justify-between sticky'>
                <p>VESTING APP</p>
                {account && (
                    <p>{account}</p>
                )}
                {
                    !account && (
                        <div className='space-x-10'>
                            <Link 
                                className='bg-teal-400 text-white py-3 rounded-lg px-6'
                                href="/">Users</Link>

                            <Link 
                                className='bg-slate-600 text-white py-3 rounded-lg px-6'
                                href="/admin">Admin</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Nav