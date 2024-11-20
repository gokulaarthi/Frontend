import React, { useState } from 'react';

function Transaction({ accountNumber }) {
    const [amount, setAmount] = useState('');

    const handleDeposit = async () => {
        await fetch(`/api/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ accountNumber, amount }),
        });
    };

    const handleWithdraw = async () => {
        await fetch(`/api/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ accountNumber, amount }),
        });
    };

    return (
        <div>
            <h2>Transactions</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
            />
            <button onClick={handleDeposit}>Deposit</button>
          <span style={{color:'white'}}>1</span>   <br />
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
}

export default Transaction;
