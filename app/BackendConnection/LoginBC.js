// const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Send username and password to your backend for verification (API call etc.)
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         navigation.navigate('HomeScreen'); // Replace with your desired screen
//       } else {
//         alert('Login failed! Please check your username and password.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };