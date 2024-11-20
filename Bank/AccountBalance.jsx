import React, { useState, useEffect } from 'react';

function AccountBalance({ accountNumber }) {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const response = await fetch(`/api/balance/${accountNumber}`);
            const data = await response.json();
            setBalance(data.balance);
        };
        fetchBalance();
    }, [accountNumber]);

    return (
        <div>
            <h2>Account Balance: ${balance}</h2>
        </div>
    );
}

export default AccountBalance;
