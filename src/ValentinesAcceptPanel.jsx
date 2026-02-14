import happyValentinesDay from './images/happy_valentines_day.png';
import hannah from './images/hannah.jpeg';
import { useState, useEffect } from 'react';
import { getThatsWhatIThoughtLabel, getJKlolLabel, getFinalScreenContent } from './strings';

export default function ValentineAcceptPanel({ yesClicked }) {
    const [showThatsWhatIThought, setShowThatsWhatIThought] = useState(false);
    const [showJKlol, setShowJKlol] = useState(false);
    const [showFinalScreen, setShowFinalScreen] = useState(false);

    useEffect(() => {
        let t1 = null;
        let t2 = null;

        if (yesClicked) {
            setShowThatsWhatIThought(true);

            t1 = setTimeout(() => {
                setShowThatsWhatIThought(false);
                setShowJKlol(true);
            }, 3000);

            t2 = setTimeout(() => {
                setShowJKlol(false);
                setShowFinalScreen(true);
            }, 6000);
        } else {
            // reset if yesClicked becomes false
            setShowThatsWhatIThought(false);
            setShowJKlol(false);
            setShowFinalScreen(false);
        }

        return () => {
            if (t1) clearTimeout(t1);
            if (t2) clearTimeout(t2);
        };
    }, [yesClicked]);

    return (
        <div className="final-screen">
            {showThatsWhatIThought && <h1>{getThatsWhatIThoughtLabel()}</h1>}
            {showJKlol && (
                <div>
                    <h1>{getJKlolLabel()}</h1>
                    <img className="hannah-img" src={hannah} alt="Hannah" />
                </div>
            )}
            {showFinalScreen && (
                <div>
                    <img className="happy-valentines-day-img" src={happyValentinesDay} alt="Happy Valentine's Day" />
                    <h1>{getFinalScreenContent()}</h1>
                </div>
            )}
        </div>
    );
}
