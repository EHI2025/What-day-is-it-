function showDay() {
    const today = new Date();
    const options = { weekday: 'long' };
    const dayName = today.toLocaleDateString('en-US', options);
    document.getElementById('day').innerText = `Today is: ${dayName}`;
}