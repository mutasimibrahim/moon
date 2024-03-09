fetch("https://www.boredapi.com/api/activity/") // Target the correct endpoint

.then(res => {
    console.log(res.ok, res.status)
    return res.json();
})

.then(data => {
    console.log(`You could ${data.activity}`)
})

.catch(err => {
    console.log('Failed to connect:', err.message)
})

/*
.then(response => {
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
return response.json();
})

.then(data => {
console.log(`You could ${data.activity}`); // Access the suggested activity
})

.catch(error => {
console.error("Error:", error); // Handle any errors
});
*/