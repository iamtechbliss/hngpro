// Function to display current UTC time
function displayCurrentTime() {
    function updateTime() {
        const now = new Date();
        const options = {  hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
        const utcTimeString = now.toLocaleString('en-US', options);
        
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTimeString;
        
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
        document.querySelector('[data-testid="currentDay"]').textContent = `Day of the Week: ${dayOfWeek}`;
    }

    // Initial call to update time
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
}

// Invoke function to start displaying current UTC time
displayCurrentTime();
 