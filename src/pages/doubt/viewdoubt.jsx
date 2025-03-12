import React, { useState, useEffect } from 'react';

const ViewDoubt = () => {
    const [messages, setMessages] = useState([
        { user: 'User', text: 'What is React?' },
        { user: 'Instructor', text: 'React is a JavaScript library for building user interfaces.' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { user: 'User', text: newMessage }]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // This effect could be used to fetch initial messages or handle side effects
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header h5">Doubt Conversation</div>
                        <div className="card-body">
                            <div className="chat-box">
                                {messages.map((message, index) => (
                                    <div key={index} className="chat-message">
                                        <strong>{message.user}:</strong> {message.text}
                                    </div>
                                ))}
                            </div>
                            <form className="mt-3" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Type your message here..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDoubt;
