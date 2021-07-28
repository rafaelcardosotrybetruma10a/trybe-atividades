export const addRegister = (value) => {
	return { type: 'ADD_REGISTER', data: value }
};


export const login = (value) => { 
	return { type: 'LOGIN', value }
};
