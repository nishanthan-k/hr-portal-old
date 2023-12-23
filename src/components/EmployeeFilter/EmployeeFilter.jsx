import React, { useEffect, useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import "./employeeFilter.css";

const filterBy = [
	{ key: "role", text: "By Role", value: "role" },
	{ key: "fullName", text: "By Name", value: "fullName" },
];

const sortBy = [
	{ key: "doj", text: "By DOJ", value: "doj" },
	{ key: "exp", text: "By Exp", value: "exp" },
];

const EmployeeFilter = (props) => {
	const [filterOption, setFilterOption] = useState("role" || "");
	const [sortOption, setSortOption] = useState("exp");
	const [input, setInput] = useState("");
	const [validSearch, setValidSearch] = useState(true);

	const searchHandler = (e) => {
		setInput(e.target.value);
		// console.log("set input:", input);
	};

	const filterHandler = (event, { value }) => {
		// console.log(value);
		let bird_name = event.target.textContent;
		// console.log(bird_name);
		setFilterOption(value);
	};

	const sortHandler = (event, { value }) => {
		// console.log(value);
		let bird_name = event.target.textContent;
		// console.log(bird_name);
		setSortOption(value);
	};

	function sortDataBy(data, byKey) {
		let sortedData = data;
		if (byKey === "exp") {
			// console.log("sorting by exp");
			sortedData = data.sort(function (a, b) {
				return b.exp - a.exp;
			});
		} else {
			sortedData.forEach((emp, index) => {
				let parts = emp.doj.split("-");
				sortedData.dateFormat = new Date(parts[2], parts[1] - 1, parts[0]);
			});
			sortedData = sortedData.sort((a, b) => a.dateFormat - b.dateFormat);
			sortedData.forEach((emp) => delete emp.dateFormat);
		}

		console.log(
			"sortedData:",
			sortedData,
			"-----------------------------------------------------------------------------------"
		);
		return sortedData;
	}

	useEffect(() => {
		let temp = empData.employees.filter((emp, input) => emp);
		let data = [];

		if (input) {
			temp.map((emp, index) => {
				if (
					emp[filterOption]
						.toLowerCase()
						.replace(" ", "")
						.includes(input.toLowerCase().replace(" ", ""))
				) {
					// console.log(emp["fullName"], emp[filterOption]);
					data.push(emp);
					setValidSearch(true);
				}
			});
		}

		// console.log("doj", sortOption);

		temp.map((emp, index) => {
			// console.log(typeof emp.exp, emp.exp);
		});

		// if (sortOption) {
		sortDataBy(data, sortOption);
		// }

		if (data.length > 0 && input.length !== 0) {
			// console.log("gt", input)
			props.setFilteredEmp(data);
		} else {
			// console.log("lt", input)
			// props.setFilteredEmp("No Input");
			props.setFilteredEmp(temp);
			// console.log(
				// typeof props.filteredEmp,
				// "--------------------------------------------------------"
			// );
		}

		if (input.length === 0) {
			// console.log("zero", input)
			props.setFilteredEmp(temp);
		}
	}, [input, filterOption, sortOption]);

	return (
		// <div className='filter-bar'>
		//   <Input
		//     action={
		//       <Dropdown
		//         button basic floating placeholder='Filter By' options={ filterBy } defaultValue='role' onChange={ filterHandler } />
		//     }
		//     icon='search'
		//     iconPosition='left'
		//     value={ input }
		//     onChange={(e) => {searchHandler(e);} }
		//     placeholder="Search here"
		//   />
		//   <Dropdown
		//     button basic floating placeholder='Sort By' options={ sortBy } defaultValue="exp" onChange={sortHandler}
		//   />
		// </div>
		<div
			className="filter-bar"
			style={{ backgroundColor: "white", width: "450px" }}
		>
			<Input
				action={
					<Dropdown
						compact // Add the compact prop here
						button
						basic
						floating
						placeholder="Filter By"
						options={filterBy}
						defaultValue="role"
						onChange={filterHandler}
					/>
				}
				icon="search"
				iconPosition="left"
				value={input}
				onChange={(e) => {
					searchHandler(e);
				}}
				placeholder="Search here"
			/>
			<Dropdown
				compact // Add the compact prop here
				button
				basic
				floating
				placeholder="Sort By"
				options={sortBy}
				defaultValue="exp"
				onChange={sortHandler}
			/>
		</div>
	);
};

export default EmployeeFilter;
