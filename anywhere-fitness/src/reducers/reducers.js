import {
	FETCH_CLASS_START,
	FETCH_CLASS_SUCCESS,
	FETCH_CLASS_ERROR,
	LOGIN_MEMBER_START,
	LOGIN_MEMBER_SUCCESS,
	LOGIN_MEMBER_ERROR,
	LOGIN_INSTRUCTOR_START,
	LOGIN_INSTRUCTOR_SUCCESS,
	LOGIN_INSTRUCTOR_ERROR,
	INSTRUCTOR_FORM,
	INSTRUCTOR_EDIT,
	INSTRUCTOR_DELETE
} from '../actions/actions';

const intialState = {
	isFetchingData: false,
	isFetchingUser: false,
	classes: [],
	user_id: '',
	error: ''
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case FETCH_CLASS_START:
			return {
				...state,
				isFetchingData: true
			};

		case FETCH_CLASS_SUCCESS:
			return {
				...state,
				isFetchingData: false,
				error: '',
				classes: action.payload
			};

		case FETCH_CLASS_ERROR:
			return {
				...state,
				isFetchingData: false,
				error: action.payload
			};

		case LOGIN_MEMBER_START:
			return {
				...state,
				isFetchingUser: true
			};

		case LOGIN_MEMBER_SUCCESS:
			return {
				...state,
				isFetchingUser: false,
				error: '',
				user_id: action.payload
			};

		case LOGIN_MEMBER_ERROR:
			return {
				...state,
				isFethingUser: false
			};

			case LOGIN_INSTRUCTOR_START:
			return {
				...state,
				isFetchingUser: true
			};

		case LOGIN_INSTRUCTOR_SUCCESS:
			return {
				...state,
				isFetchingUser: false,
				error: '',
				user_id: action.payload
			};

		case LOGIN_INSTRUCTOR_ERROR:
			return {
				...state,
				isFethingUser: false
			};

			case INSTRUCTOR_FORM:
			return {
				...state,
				isFethingUser: false
			};

			case INSTRUCTOR_EDIT:
			return {
				...state,
				isFethingUser: false
			};

			case INSTRUCTOR_DELETE:
			return {
				...state,
				isFethingUser: false
			};

		default: {
			return state;
		}
	}
};

export default reducer;