// ====== SETUP A NEW DATE OBJECTS ======
const date= new Date;

// ====== SETUP OUR CURRENT DATES ======
const thisDay = date.getDate();
const thisMonth = date.getMonth();
const thisYear = date.getFullYear();
const dateNextYear = new Date(thisYear+1, thisMonth, thisDay);

// ===== Export dates for voucher creation  ======
exports.todayISOS = date.toISOString();
exports.nextYearISOS = dateNextYear.toISOString();