import React, { useEffect, useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import "./employeeFilter.css";

const filterBy = [
	{ key: "role", text: "By Role", value: "role" },
	{ key: "fullName", text: "By Name", value: "fullName" },
	{ key: "empID", text: "By empID", value: "empID" },
];

const sortBy = [
	{ key: "doj", text: "By DOJ", value: "doj" },
	{ key: "exp", text: "By Exp", value: "exp" },
];

const EmployeeFilter = (props) => {
	const [filterOption, setFilterOption] = useState("role" || "");
	const [sortOption, setSortOption] = useState("exp");
	const [input, setInput] = useState("");

	const searchHandler = (e) => {
		setInput(e.target.value);
	};

	const filterHandler = (event, { value }) => {
		// let bird_name = event.target.textContent;
		// console.log(bird_name);
		setFilterOption(value);
	};

	const sortHandler = (event, { value }) => {
		setSortOption(value);
	};

	function sortDataBy(data, byKey) {
		let sortedData = data;
		if (byKey === "exp") {
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
					data.push(emp);
				}
				return [];
			});
		}

		sortDataBy(data, sortOption);

		if (data.length > 0 && input.length !== 0) {
			props.setFilteredEmp(data);
		} else {
		}

		if (input.length === 0) {
			props.setFilteredEmp(temp);
		}
	}, [input, filterOption, sortOption, props]);

	return (
		<div className="filter-bar">
			<Input
				action={
					<Dropdown
						button
						basic
						floating
						placeholder="Filter By"
						options={ filterBy }
						defaultValue="role"
						onChange={ filterHandler }
					/>
				}
				icon="search"
				iconPosition="left"
				value={ input }
				onChange={ (e) => {
					searchHandler(e);
				} }
				placeholder="Search here"
			/>
			<Dropdown
				button
				basic
				floating
				placeholder="Sort By"
				options={ sortBy }
				defaultValue="exp"
				onChange={ sortHandler }
			/>
		</div>
	);
};

export default EmployeeFilter;
