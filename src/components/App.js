import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogCards from "./HogCards";
import Filter from "./Filter";

function App() {
	const [isGreasedFiltered, setIsGreasedFilterd] = useState(false);
	const [isNameSorted, setIsNameSorted] = useState(true);

	const handleIsGreasedFilteredChanged = () => {
		setIsGreasedFilterd(old => !old);
	}
	const handleIsNameSortedChange = () => {
		setIsNameSorted(sort => !sort);
	}
	const sortByName = (a, b) => {
		return a.name.toLowerCase() < b.name.toLowerCase() ? -1 :
			a.name.toLowerCase() > b.name.toLowerCase() ? 1 :
				0;
	}
	const sortByWeight = (a, b) => {
		return a.weight - b.weight;
	}
	const hogList = hogs.map((hog, idx) => ({ ...hog, id: idx, medal: hog["highest medal achieved"] }));
	const displayHogList = [...hogList.filter(hog => {
		return isGreasedFiltered ? hog.greased : true;
	})].sort(isNameSorted ? sortByName : sortByWeight)
	return (
		<div className="App">
			<Nav />
			<Filter
				isGreasedFiltered={isGreasedFiltered}
				isNameSorted={isNameSorted}
				onIsGreasedFilteredChanged={handleIsGreasedFilteredChanged}
				onIsNameSortedChanged={handleIsNameSortedChange}
			/>
			<HogCards hogs={displayHogList} />
		</div>
	);
}

export default App;
