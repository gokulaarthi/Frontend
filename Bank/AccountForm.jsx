import React, { useState } from 'react';

function AccountForm({ onCreateAccount }) {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolder, setAccountHolder] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountData = { accountNumber, accountHolder };
        onCreateAccount(accountData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Account Number:</label>
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Account Holder:</label>
                <input
                    type="text"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Account</button>
        </form>
    );
}

export default AccountForm;
