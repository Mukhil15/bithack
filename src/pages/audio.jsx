import "../audio.css"
import Result from "../component/Result";

const Audio = ({ result }) => {
    return (
        <><form id="convert-form" encType="multipart/form-data">
            <div className="input">
                <label >Select an audio file:</label>
                <input type="file" id="file" name="file" accept=".wav, .mp3, .flac, .m4a" />
            </div>
            <div className="input">
                <label>Select target language:</label>
                <select id="language" name="language">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="ar">Arabic</option>
                    <option value="ru">Russian</option>
                    <option value="pt">Portuguese</option>
                    <option value="nl">Dutch</option>
                    <option value="tr">Turkish</option>
                    <option value="sv">Swedish</option>
                    <option value="pl">Polish</option>
                    <option value="uk">Ukrainian</option>
                    <option value="el">Greek</option>
                    <option value="fi">Finnish</option>
                    <option value="no">Norwegian</option>
                    <option value="da">Danish</option>
                    <option value="cs">Czech</option>
                    <option value="th">Thai</option>
                </select>

            </div>
            <button type="button" id="convert-button">Convert</button>
        </form>

            <div className="mic-div">
                <Result result={result} />
            </div>
        </>
    );
}

export default Audio;