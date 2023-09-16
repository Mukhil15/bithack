import { useState } from 'react';
import "./App.css"
import { Link, NavLink, Outlet } from "react-router-dom"


const App = () => {
  //state declaration
  const [showChatContainer, setShowChatContainer] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [chat, setChat] = useState([])
  const [chatLoading, setChatLoading] = useState(false)
  const userName = "Guest";

  const responses = {
    "hello": "Hi there,! How can I assist you?",
    "hi": "Hi there, ! How can I assist you?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "goodbye": "Goodbye! Have a great day!",
    "help": "Sure, I'm here to help. What do you need assistance with?",
    "time": new Date().toLocaleTimeString(),
    "name": "I'm just a App, so I don't have a personal name. You can call me App!",
    "thanks": "You're welcome! If you have any more questions, feel free to ask.",
    "languages": "We support a wide range of languages for translation. You can select your target language from the dropdown menu on our interface, and we will translate the content into that language.",
    "model": "We use Google Translate for translation. ",
    "other formats": "Yes,you can upload the audio files in other formats such as MP3, WAV, FLAC, and M4A",
    "how long": "The processing time depends on the duration and complexity of the audio file.Typically, it takes only a few moments to process a short audio clip, but longer recordings may take the same time.",
    "copy": "Yes, you can easily copy the generated translation to your clipboard using your browser's copy function.",
    "download": "Yes, you can easily download the generated transcriptions and translation ",
    "use cases": "Our tool is versatile and can be used for a variety of purposes. Common use cases include transcribing interviews, translating meetings and more",
    "cost": "No,our service is free to use",
    "limit": "We do not impose a strict limit on the number of translations you can perform. However, we encourage responsible usage to ensure fair access for all users.",
    "what is the accuracy": "Our translation accuracy is generally high, but it may not capture nuances and context in every instance. We recommend reviewing and editing the translations for critical applications.",
    "special features": "Yes, our tool offers some unique features that distinguish it from others: 1) Multi-language Support: We support translation to a wide range of languages, making it versatile for users from various linguistic backgrounds. 2)Batch Processing: You can upload multiple audio files at once for simultaneous processing, saving you time. 3)Speech Recognition Accuracy: Our speech recognition system aims for high accuracy, even in challenging conditions. 3)Ease of Use: Our user-friendly interface makes it simple to upload and process audio files.",
    "live transcription": "Yes, you can use this tool for live transcription and translation during meetings or events. Our real-time transcription feature allows you to connect to a live audio source, and we will provide you with simultaneous transcriptions and translations as the audio is processed. ",
    "delay": "There may be a slight delay due to processing, but we aim to provide real-time or near-real-time transcriptions and translations for a seamless experience.",
    "Mp4": "You can upload an MP4 video file in the same way as audio files. Simply select the MP4 file from your device, and our tool will process it for transcription",
    "background noise": "To improve accuracy, it's advisable to use videos with clear audio and minimal background noise. You can also consider noise reduction techniques during post-processing.",
    "limit,size": "The upload file size limit may vary depending on the hosting environment. Please check the interface for specific file size limits.",
    "default": "I'm sorry, I don't have a response for that. Could you please rephrase your question?"
  };


  //functions
  const hideChat = () => {
    setShowChatContainer(false)
  }
  const showChat = () => {
    setShowChatContainer(true)
  }

  const handleInputClick = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  const sendMessage = () => {
    const userMessage = userInput.toLowerCase();
    console.log(userMessage);

    if (userMessage !== "") {
      displayMessage(userName + ": " + userMessage, "user");
      respondToMessage(userMessage);
      setUserInput("")
    }
  }

  function displayMessage(message, sender) {
    setChat((prev) => [...prev, { msg: message, source: sender }])
  }

  function respondToMessage(userMessage) {
    const keywords = Object.keys(responses);
    for (const i of keywords) {
      if (userMessage.includes(i)) {
        const response = responses[i];


        const randomDelayInSeconds = Math.floor(Math.random() * 5) + 1;

        setChatLoading(true)


        setTimeout(function () {
          setChat((prev) => ([...prev, { msg: response, source: "bot" }]))
          setChatLoading(false)
        }, randomDelayInSeconds * 1000);
      }
    }

  }
  return (
    <>
      <button className="logout" onClick={() => { }} > Logout</button >
      <div className="body">
        <h2>Speech to Text Conversion</h2>
        <div className="menu">
          <NavLink to="/speech" >Speech to Text</NavLink>
          <NavLink to="/audio">Audio to Text</NavLink>
          <NavLink to="/videot">Video to Text</NavLink>
          <NavLink to="/translate">Translation</NavLink>
        </div>
        <Outlet />


        <div>
          <i className="fa fa-comments" id="showChat" aria-hidden="true" onClick={showChat}></i>
          {showChatContainer && <div id="chat-container">
            <h4 id="hide"><i className="fa fa-comments" aria-hidden="true" onClick={hideChat}> </i></h4>
            <div id="chat-wrapper">
              <div id="chat-log"></div>
              {chat.map(({ msg, source }, index) => {
                return <div key={index} className={source}>{msg}</div>
              })}
              {chatLoading && <p>Bot: Typing... <span className='loading'></span></p>}
            </div>
            <div className="uinputs">
              <input type="text" id="user-input" onKeyDown={handleInputClick} onChange={(e) => setUserInput(e.target.value)} value={userInput} />
              <button id="send-btn" onClick={sendMessage}>Send</button>
            </div>
          </div>}

        </div>
      </div >
    </>
  );
};

export default App;
