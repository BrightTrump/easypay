const monthsSchema = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const fullMonthsSchema = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Format Date
export const formatDate = (timestamp: Date | string) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month + 1 < 10 ? "0" + (month + 1) : month + 1;
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
};

// Format Date with Month Name
export const formatDateWithMonthName = (timestamp?: Date | string) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedDate = `${formattedDay}${
    Number(String(formattedDay)[2]) === 1
      ? "st"
      : Number(String(formattedDay)[2]) === 2
      ? "nd"
      : Number(String(formattedDay)[2]) === 3
      ? "rd"
      : "th"
  } ${monthsSchema[month]},  ${year}`;

  return formattedDate;
};

// Get Current Date
export const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = `${formattedMonth}-${formattedDay}-${year}`;

  return formattedDate;
};

// Get Full Month
export const getFullMonth = (month: string) => {
  return fullMonthsSchema[Number(month) - 1];
};

// Check if year is a leap year
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Format Date to Time
export function convertUTCToLocalTime(utcDateStr: Date | string): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const utcDate = new Date(utcDateStr);

  if (isNaN(utcDate.getTime())) {
    console.log("Invalid UTC date string");
    return "";
  }

  const localTime = utcDate.toLocaleTimeString(undefined, options);

  return localTime.replace(":", " : ");
}

export function convertLocalTimeToUTC(localTimeStr: Date | string): string {
  const localDate = new Date(localTimeStr);

  if (isNaN(localDate.getTime())) {
    throw new Error("Invalid local time string");
  }

  // Get the UTC representation of the local time
  const utcDate = new Date(
    localDate.getTime() + localDate.getTimezoneOffset() * 60000
  );

  return utcDate.toISOString(); // Returns the UTC time in ISO format
}

// Convert to ISO
export function convertToISO(dateStr: string, timeStr?: string) {
  if (!dateStr) return;

  // Parse the date in DD/MM/YYYY format
  const [day, month, year] = dateStr?.split("/").map(Number);

  // Parse the time in "HH : MM AM/PM" format
  let hours = Number(timeStr?.split(" ")[0]);
  let minutes = Number(timeStr?.split(" ")[2]);
  let period = timeStr?.split(" ")[3];

  // Adjust hours for AM/PM
  if (period === "PM" && Number(hours) !== 12) {
    hours += 12;
  } else if (period === "AM" && Number(hours) === 12) {
    hours = 0;
  }

  // Create a Date object in the local timezone
  const date = timeStr
    ? new Date(Date.UTC(year, month - 1, day, hours, minutes))
    : new Date(Date.UTC(year, month - 1, day));

  // Convert to ISO 8601 format in UTC
  return date?.toISOString();
}

// Check if date is expired
export const isDateExpired = (dateStr: string) => {
  const currentDate = new Date();
  const date = new Date(dateStr);
  const currentYear = currentDate.getFullYear();
  const dateYear = date.getFullYear();
  const currentMonth = currentDate.getMonth();
  const dateMonth = date.getMonth();
  const currentDay = currentDate.getDate();
  const dateDay = date.getDate();
  const currentHour = currentDate.getHours();
  const dateHour = date.getHours();
  const currentMins = currentDate.getMinutes();
  const dateMins = date.getMinutes();

  const currentTimeStamp = new Date(
    currentYear,
    currentMonth,
    currentDay,
    currentHour,
    currentMins
  ).getTime();

  const dateTimeStamp = new Date(
    dateYear,
    dateMonth,
    dateDay,
    dateHour,
    dateMins
  ).getTime();

  return dateTimeStamp <= currentTimeStamp;
};

/**
 * Converts a high-precision ISO timestamp to a standard ISO 8601 format with UTC timezone.
 * If the dateString is already in UTC format, it returns the dateString unchanged.
 *
 * @param {string} dateString - The dateString timestamp in the format `YYYY-MM-DDTHH:mm:ss.ssssss` or `YYYY-MM-DDTHH:mm:ss.sssZ`.
 * @returns {string} - The converted timestamp in ISO 8601 format with UTC timezone (`YYYY-MM-DDTHH:mm:ss.sssZ`).
 *
 * @example
 * const original = "2024-12-01T23:44:57.4797843";
 * const converted = convertToISO8601WithUTC(original);
 * console.log(converted); // Outputs: "2024-12-01T23:44:57.479Z"
 *
 * const alreadyUTC = "2024-12-01T23:44:57.479Z";
 * const same = convertToISO8601WithUTC(alreadyUTC);
 * console.log(same); // Outputs: "2024-12-01T23:44:57.479Z"
 */
export function convertToISO8601WithUTC(dateString?: string) {
  if (!dateString) return "";

  // Check if the dateString is already in UTC format (ends with 'Z')
  if (dateString?.endsWith("Z")) {
    return dateString;
  }

  // Convert to a Date object and then to ISO string in UTC format
  const date = new Date(dateString);
  return date?.toISOString();
}

// Get Relative Date
export function getRelativeDate(dateString: string): string {
  const date = new Date(convertToISO8601WithUTC(dateString));
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date?.getTime()) / 1000);

  const timeIntervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in timeIntervals) {
    const seconds = timeIntervals[interval];
    const count = Math.floor(diffInSeconds / seconds);

    if (count > 0) {
      return `${count} ${interval}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export const formatDateShort = (date: Date | string): string => {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en-GB", options);
};
