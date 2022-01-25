import {Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage/Homepage";
import NewEvent from "./pages/NewEvent/NewEvent";
import {onLogin, onLogout, onCreateAccount} from "./utils/header";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />} />
			<Route path="/new-event" element={<NewEvent />} />
		</Routes>
	);
}

export default App;
