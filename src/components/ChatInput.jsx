import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({ chatMessages,setChatMessages }) {
    const [ inputText,setInputText ] = useState('');
    
    // Fonction pour recuperer les donnees de la zone de  saisie
    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages,{
                message:inputText,
                sender:'user',
                id:crypto.randomUUID()
            }
        ];
        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
            ...newChatMessages,{
                message:response,
                sender:'robot',
                id:crypto.randomUUID()
            }
        ]);

        setInputText('');
    }

    return (
        <>
            <input
                placeholder="Send message to chatbot"
                size="40"
                onChange={saveInputText}
                value={inputText}
            />
            <button
                onClick={sendMessage}
            >Send</button>
        </>
    );
}