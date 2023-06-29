export function getDaysFromTodayEpoch(days) {
    const twoDaysInMilliseconds = days * 24 * 60 * 60 * 1000; // Days days in milliseconds
    const currentDate = new Date(); // Current date
  
    // Add two days to the current date
    const twoDaysFromToday = new Date(currentDate.getTime() + twoDaysInMilliseconds);
  
    // Convert the resulting date to epoch timestamp
    const epochTimestamp = Math.floor(twoDaysFromToday.getTime() / 1000);
  
    return epochTimestamp;
}
  
  