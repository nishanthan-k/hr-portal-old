import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Icon, Segment } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import currentUser from "../../assets/data/currentUser.json"
import "./login.css";

const Login = () => {
	const navigate = useNavigate();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
			showPassword: false,
		},
		onSubmit: (values, onSubmitProps) => {
			onSubmitProps.setSubmitting(false);
		},
		validate: (values) => {
			// setFormSubmitted(!formSubmitted)
			let errors = {};
			console.log("formSubmitted?", formSubmitted)
			if (formSubmitted) {
				console.log("submitted")
				if (!values.username) {
					errors.username = "Username is required";
				}

				if (!values.password) {
					errors.password = "Password is required";
				}

				if (!errors.username && !errors.password) {
					let user = empData.employees.filter(
						(emp, index) => emp.userName === values.username
					);

					if (user.length > 0) {
						if (user[0].password === values.password) {
							Object.assign(currentUser[0], {username: formik.values.username, password: formik.values.password})
							console.log(currentUser[0])
							navigate("/dashboard");
						} else {
							errors.password = "Wrong Password";
						}
					} else {
						errors.username = "User doesn't exists";
					}
				}

			}
			return errors;
		},
	});

	console.log("submit:", formSubmitted)

	const submitHandler = () => {
		setFormSubmitted(!formSubmitted);


	}

	const changeHandler = () => {
		setFormSubmitted(false);
		console.log("change")
	}

	return (
		<div className="login">
			<Segment className="segment">
				<Form className="login-form" onSubmit={ () => { formik.handleSubmit(); } }  >
					<div className="form-field">
						<Form.Field>
							<Form.Input
								required
								label="Username"
								type="text"
								name="username"
								placeholder="Username"
								value={ formik.values.username }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								onKeyPress={ changeHandler }
								error={ formSubmitted && formik.errors.username && {
									content: formik.errors.username,
									pointing: 'below',
								} }
							/>
						</Form.Field>
					</div>
					<div className="form-field">
						<Form.Field>
							<Form.Input
								required
								label="Password"
								type={ formik.values.showPassword ? "text" : "password" }
								name="password"
								placeholder="Password"
								value={ formik.values.password }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formSubmitted && formik.errors.password && {
									content: formik.errors.password,
									pointing: 'above',
								} }
								icon={
									<Icon
										name={ formik.values.showPassword ? "eye" : "eye slash" }
										link
										onClick={ () =>
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
					<Button fluid primary onClick={ () => { submitHandler(); } } >
						Login
					</Button>
				</Form>
			</Segment>
		</div>
	);
};

export default Login;
