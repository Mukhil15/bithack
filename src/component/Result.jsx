const Result = ({ result }) => {
    return (
        <>
            <button id="copyButton" className="cpybtn">
                <i className="fa fa-clipboard" aria-hidden="true"> </i>
                <p>Copy</p>
            </button>
            <button id="clearButton">
                <i className="fa fa-eraser" aria-hidden="true"> </i>
                <p>Clear</p>
            </button>
            <button onClick={() => { }}>
                <i className="fa fa-download" aria-hidden="true"> </i>
                <p>Download</p>
            </button>
            <div className="divtext" id="speechToText">
                {result}
            </div>
        </>
    );
}

export default Result;