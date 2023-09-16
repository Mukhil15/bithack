import { useEffect, useMemo, useState } from "react";
import Result from "../component/Result";

const Speech = () => {
    const [recording, setRecording] = useState(false)
    const [result, setResult] = useState("")
    const recognition = useMemo(() => {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "ta-IN";
        recognition.interimResults = true;
        return recognition
    }, [])
    const userName = "Guest";

    useEffect(() => {
        const handleResult = (event) => {
            let interimTranscript = '';
            console.log(event);
            for (let i = event.resultIndex; i < event.results.length; i++) {
                interimTranscript += event.results[i][0].transcript + ' ';

            }
            setResult(interimTranscript)


        };

        if (recording) {
            recognition.onresult = handleResult;
            recognition.onspeechend = () => { setRecording(false) }
            recognition.start();
        } else if (recognition) {
            recognition.stop();
        }

        return () => {
            if (recognition) {
                recognition.stop();
            }
        };
    }, [recording]);
    return (
        <div className="mic-div">
            <Result result={result} />
            <div className="mbutton">
                <div className="mic-button" id="micButton" onClick={() => setRecording((prev) => !prev)}>
                    <div className="wave-bars">
                        {recording && <><div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div></>}

                    </div>
                    <div className="wave" style={{ animationPlayState: (recording ? "running" : "paused") }}></div>
                    <i className="fas fa-microphone fa-2x mic-icon"></i>
                    <div className="wave-bars" id="right">
                        {recording && <><div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div></>}

                    </div>
                </div>
            </div>
        </div>);
}

export default Speech;