import React, { useState } from 'react';
import Form from './components/Form';
function App() {
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
setDarkMode(!darkMode);
}

return (
<div className={`app ${darkMode ? 'dark' : 'light'}`}>
<button onClick={toggleDarkMode}>
{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>
<Form />
</div>
);
}

export default App;