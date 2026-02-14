import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ValentineContainer from './ValentineContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ValentineContainer />
  </StrictMode>,
)
