fetch("https://www.boredapi.com/api/activity/") // Target the correct endpoint

.then(res => {
    console.log(res.ok, res.status);
    return res.json();
})

.then(data => {
    console.log(`You could ${data.activity}`);
})

.then(data => {
    console.log(data);
})

.catch(err => {
    console.log('Failed to connect:', err.message);
})