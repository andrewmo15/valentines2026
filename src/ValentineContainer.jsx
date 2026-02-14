import './App.css';
import { useState } from 'react';
import ValentineDecisionPanel from './ValentineDecisionPanel';
import ValentineAcceptPanel from './ValentinesAcceptPanel';

export default function ValentineContainer() {
    const [noCount, setNoCount] = useState(0);
    const [yesClicked, setYesClicked] = useState(false);

    return (
      <div className="container">
        {yesClicked ? (
          <ValentineAcceptPanel
            yesClicked={yesClicked}
          />
        ) : (
          <ValentineDecisionPanel
            noCount={noCount}
            setNoCount={setNoCount}
            setYesClicked={setYesClicked}
          />
        )}
      </div>
    );
}