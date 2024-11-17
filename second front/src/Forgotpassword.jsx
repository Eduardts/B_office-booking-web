import React, { useState } from 'react';

function Forgotpassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add your password reset functionality here
        console.log(`Password reset link has been sent to ${email}`);
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export { Forgotpassword };

