import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_CLASS_START = 'FETCH_CLASS_START';
export const FETCH_CLASS_SUCCESS = 'FETCH_CLASS_SUCCESS';
export const FETCH_CLASS_ERROR = 'FETCH_CLASS_ERROR';

export const LOGIN_MEMBER_START = 'LOGIN_MEMBER_START';
export const LOGIN_MEMBER_SUCCESS = 'LOGIN_MEMBER_SUCCESS';
export const LOGIN_MEMBER_ERROR = 'LOGIN_MEMBER_ERROR';
export const LOGIN_INSTRUCTOR_START = 'LOGIN_MEMBER_START';
export const LOGIN_INSTRUCTOR_SUCCESS = 'LOGIN_MEMBER_SUCCESS';
export const LOGIN_INSTRUCTOR_ERROR = 'LOGIN_INSTRUCTOR_ERROR';

export const INSTRUCTOR_FORM = 'INSTRUCTOR_FORM';
export const INSTRUCTOR_EDIT = 'INSTRUCTOR_EDIT';
export const INSTRUCTOR_DELETE = 'INSTRUCTOR_DELETE';

export const USER_ID = 'USER_ID';

//Search class 
export const fetchClass = id => dispatch => {
	dispatch({ type: FETCH_CLASS_START });
	axiosWithAuth()
		.get(`/users/${id}/classes`)
		.then(res => dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data }))
		.catch(err => console.log(err));
};

//login member and push to classList(member page)
export const loginMember = (login, history) => dispatch => {
	dispatch({ type: LOGIN_MEMBER_START });

	axios
		.post('https://anytime-fitness.herokuapp.com/api/auth/login', login)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			history.push('/ClassList');
		})
		.catch(err => dispatch({ type: LOGIN_MEMBER_ERROR }));
};

//logins in the instructor and pushes 
export const loginInstructor = (login, history) => dispatch => {
	dispatch({ type: LOGIN_INSTRUCTOR_START });

	axios
		.post('https://anytime-fitness.herokuapp.com/api/auth/login', login)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			history.push('/InstructorForm');
		})
		.catch(err => dispatch({ type: LOGIN_INSTRUCTOR_START }));
};

//allows the instructor to add a class
export const formInstructor = (form, history) => dispatch => {
	dispatch({ type: INSTRUCTOR_FORM });

	axios
		.post('https://anytime-fitness.herokuapp.com/api/auth/instructor/classes', form)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			history.push('/ClassList');
		})
		.catch(err => dispatch({ type: INSTRUCTOR_FORM }));
};

//allows the instructor to edit a class
export const instructorEdit = (form, history) => dispatch => {
	dispatch({ type: INSTRUCTOR_EDIT });

	axios
		.post('https://anytime-fitness.herokuapp.com/api/auth/instructor/classes/:id', form)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			history.push('/ClassList');
		})
		.catch(err => dispatch({ type: INSTRUCTOR_EDIT }));
};

//allows the instructor to delete a class
export const instructorDelete = (form, history) => dispatch => {
	dispatch({ type: INSTRUCTOR_DELETE });

	axios
		.post('https://anytime-fitness.herokuapp.com/api/auth/instructor/classes/:id', form)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			history.push('/ClassList');
		})
		.catch(err => dispatch({ type: INSTRUCTOR_DELETE }));
};