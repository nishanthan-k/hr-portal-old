import { useFormik } from "formik";
import React from "react";
import { Button, Form, Segment, Icon } from "semantic-ui-react";
import "./login.css";
import empData from "../../assets/data/employeesData.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: (values) => {
      
		},
		validate: (values) => {
			let errors = {};

			if (!values.username) {
				errors.username = "Required";
			}

			if (!values.password) {
				errors.password = "Required";
			}

			if (values.username && values.password) {
				let user = empData.employees.filter(
					(emp, index) => emp.userName === values.username
				);

				if (user.length > 0) {
					if (user[0].password === values.password) {
						navigate("/dashboard");
					} else {
						errors.password = "Wrong Password";
					}
				} else {
					errors.username = "User doesn't exists";
				}
			}

			return errors;
		},
	});


	return (
		<div className="login">
			<Segment className="segment">
				<Form className="login-form" onSubmit={formik.handleSubmit} >
					<div className="form-field">
						<Form.Field>
							<Form.Input
								label="Username"
								type="text"
								name="username"
								placeholder="Username"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</Form.Field>
					</div>
					{formik.errors.username && (
						<div style={{ color: "red" }}>
							{formik.touched.username && formik.errors.username}
						</div>
					)}
					<div className="form-field">
						<Form.Field>
							<Form.Input
								label="Password"
								type={formik.values.showPassword ? "password" : "text"}
								name="password"
								placeholder="Password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								icon={
									<Icon
										name={formik.values.showPassword ? "eye slash" : "eye"}
										link
										onClick={() =>
											formik.setFieldValue(
												"showPassword",
												!formik.values.showPassword
											)
										}
									/>
								}
							/>
						</Form.Field>
					</div>
					{formik.errors.password && (
						<div style={{ color: "red" }}>
							{formik.touched.password && formik.errors.password}
						</div>
					)}
					<Button fluid primary >
						Login
					</Button>
				</Form>
			</Segment>
		</div>
	);
};

export default Login;
