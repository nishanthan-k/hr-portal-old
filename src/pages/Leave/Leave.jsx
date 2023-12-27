import React, { useState } from "react";
import "./leave.css";
import leaveData from "../../assets/data/leaveData.json";
import empData from "../../assets/data/employeesData.json";
import { Button, Table } from "semantic-ui-react";

const Leave = () => {
	let empProfile = [];
	leaveData.map((c, d) => {
		empProfile.push(empData.employees.filter((a, b) => c.empID === a.empID));
		return [];
	});

	console.log(empProfile);

	const initialStatus = leaveData.map(() => ({
		approved: false,
		declined: false,
	}));

	const [statusArray, setStatusArray] = useState(initialStatus);

	const statusHandler = (sign, rowIndex) => {
		setStatusArray((prevStatusArray) => {
			const updatedStatusArray = [...prevStatusArray];
			updatedStatusArray[rowIndex] = {
				...updatedStatusArray[rowIndex],
				approved: sign === "approve",
				declined: sign === "decline",
			};
			return updatedStatusArray;
		});
	};

  const formatHeader = (label) => {
    const words = label.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
    const header = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return words ? header : label;
  };
  


	return (
		<div className="table-container">
			<Table
				className="table"
				style={{ width: "850px", margin: "20px auto", border: "1px solid" }}
			>
				<Table.Header className="table-header">
					<Table.Row className="table-header-row">
						{Object.entries(leaveData[0]).map(
							(data, value) =>
								data[0] !== "status" && (
									<Table.HeaderCell
										className="table-header-cell"
										key={value}
										textAlign="center"
									>
										{formatHeader(data[0])}
									</Table.HeaderCell>
								)
						)}
						<Table.HeaderCell className="table-header-cell" textAlign="center">
							Approval
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{leaveData.map((user, rowIndex) => (
						<Table.Row key={rowIndex}>
							{Object.entries(user).map(
								(data, detail) =>
									data[0] !== "status" && (
										<Table.Cell
											className={
												detail === 0 ? "table-first-cell" : "table-cell"
											}
											key={detail}
											textAlign="center"
										>
											{data[1]}
										</Table.Cell>
									)
							)}
							<Table.Cell className="table-cell" textAlign="center">
								{!statusArray[rowIndex].approved &&
								!statusArray[rowIndex].declined ? (
									<>
										<Button
											positive
											content="Approve"
											onClick={() => {
												statusHandler("approve", rowIndex);
											}}
										/>
										<Button
											negative
											content="Decline"
											onClick={() => {
												statusHandler("decline", rowIndex);
											}}
										/>
									</>
								) : statusArray[rowIndex].approved ? (
									<Button positive content="Approved" />
								) : (
									<Button negative content="Declined" />
								)}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
};

export default Leave;
