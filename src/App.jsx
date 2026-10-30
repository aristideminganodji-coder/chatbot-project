import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'

function App() {
  // const [ chatMessages,setChatMessages ] = useState([{
  //   message:'hello',
  //   sender:'user',
  //   id:'id1'
  // },{
  //   message:'how can help today',
  //   sender:'robot',
  //   id:'id2'
  // },{
  //   message:'can give the todays date?',
  //   sender:'user',
  //   id:'id3'
  // },{

  //   message:'Today is October 29',
  //   sender:'robot',
  //   id:'id4'
  // }]);
  const [ chatMessages,setChatMessages ] = useState([]);


  return (
    <>
      {chatMessages.length === 0 && <p>Welcome to chatbot project</p>}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} 
      />
      <ChatMessages
        chatMessages={chatMessages} 
      />
    </>
  );
}

export default App;