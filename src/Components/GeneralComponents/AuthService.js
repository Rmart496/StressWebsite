class AuthService {
	
	loginUser = async (userEmailAndPass) => {
		
		return fetch('http://localhost:3001/api/auth/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmailAndPass)
		}).then(response => response.json()
		).catch(error => console.error('There was some kind of issue!'))
	}
	
	registerUser = async (userData) => {
		return fetch('http://localhost:3001/api/auth/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		.then(response => response.json()
		).catch(error => console.error('There was some kind of issue!', error))
	}
	
	logoutUser = async (userEmail) => {
		return fetch('http://localhost:3001/api/auth/logout', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmail)
		}).then(response => response.json()
		).catch(error => console.error('There was some kind of issue!', error))
	}
	
	resetUserPassword = async (userEmail) => {
		return fetch('http://localhost:3001/api/auth/reset', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmail)
		}).then(response => response.json()
		).catch(error => console.error('There was some kind of issue!', error))
	}

	isAuthenticated = () => {
        return sessionStorage.getItem('name') !== null;
    }


	
// ###################################################################################
// TODO: THERE IS AN UNHANDLED PROMISE HERE THAT IS CAUSING THE LOAD FAILED ERROR
	addFeelingCheckIn = async (userCheckIn) => {

		try {
			const response = await fetch('http://localhost:3001/api/post/feelingCheckIn', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userCheckIn)
			});
			
			const data = await response.text();
			return data;
		} catch (error) { 
			console.error('Error adding feeling check-in:', error);
			throw error; // You may choose to handle this error differently in your application
		}
	};
// ###################################################################################
	
}

const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;