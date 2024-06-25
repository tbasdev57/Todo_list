import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Api from "./pages/Api";
import Header from "./Components/Header/Header";
import Tasks from "./pages/Tasks";

const App = () => {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/about" element={<About />} />
				<Route path="/about/:name" element={<About />} />
				<Route path="/api" element={<Api />} />
			</Routes>
		</>
	);
};

export default App;