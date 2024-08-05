function formatDate(date) {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to get last 10 days
function getLastNDays(N) {
    let dates = [];
    let currentDate = new Date();
    for (let i = 0; i < N; i++) {
        let pastDate = new Date();
        pastDate.setDate(currentDate.getDate() - i);
        dates.push(formatDate(pastDate));
    }
    return dates;
}


export default {
    getLastNDays
}