import angryEmoji from './images/angry_emoji.jpg';
import { getNoButtonLabel, getTitle, getYesButtonLabel } from './strings';

export default function ValentineDecisionPanel({ noCount, setNoCount, setYesClicked }) {
    const angryEmojis = [];
    if (noCount >= 7) {
        for (let i = 0; i < noCount - 6; i++) {
            angryEmojis.push(
                <img key={i} src={angryEmoji} alt="angry emoji" className="emoji" />
            );
        }
    }

    // grow yes button as `noCount` increases; at 20+ make it fullscreen
    const isFullscreen = noCount >= 15;
    const yesScale = 1 + Math.min(noCount, 14) * 0.6; // preserved from original
    // Use font-size and padding so layout reflows (prevents overlap)
    const yesStyle = isFullscreen
        ? {}
        : {
            fontSize: `${1 * yesScale}rem`,
            padding: `${10 * yesScale}px ${18 * yesScale}px`,
        };

    return (
        <>
            <h1>{getTitle(noCount)}</h1>
            <div className="emoji-row">{angryEmojis}</div>
            <div className="button-row">
                <button
                    className={`btn-yes ${isFullscreen ? 'fullscreen-yes' : ''}`}
                    style={yesStyle}
                    onClick={() => setYesClicked(true)}
                >
                    {getYesButtonLabel()}
                </button>
                {!isFullscreen && (
                    <button className="btn-no" onClick={() => setNoCount(noCount + 1)}>{getNoButtonLabel()}</button>
                )}
            </div>
        </>
    );
}
