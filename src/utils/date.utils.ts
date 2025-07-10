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

  return `${formattedDay}/${formattedMonth}/${year}`;
};

// Format Date with Month Name
export const formatDateWithMonthName = (timestamp?: Date | string) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;

  const suffix =
    Number(String(formattedDay)[2]) === 1
      ? "st"
      : Number(String(formattedDay)[2]) === 2
      ? "nd"
      : Number(String(formattedDay)[2]) === 3
      ? "rd"
      : "th";

  return `${formattedDay}${suffix} ${monthsSchema[month]}, ${year}`;
};

// Get Current Date
export const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedMonth}-${formattedDay}-${year}`;
};

// Get Full Month
export const getFullMonth = (month: string) => {
  return fullMonthsSchema[Number(month) - 1];
};

// Convert UTC to Local Time
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

// Convert Local Time to UTC
export function convertLocalTimeToUTC(localTimeStr: Date | string): string {
  const localDate = new Date(localTimeStr);

  if (isNaN(localDate.getTime())) {
    throw new Error("Invalid local time string");
  }

  const utcDate = new Date(
    localDate.getTime() + localDate.getTimezoneOffset() * 60000
  );
  return utcDate.toISOString();
}

// Convert to ISO
export function convertToISO(dateStr: string, timeStr?: string) {
  if (!dateStr) return;

  const [day, month, year] = dateStr?.split("/").map(Number);

  const hours = Number(timeStr?.split(" ")[0]);
  const minutes = Number(timeStr?.split(" ")[2]);
  const period = timeStr?.split(" ")[3];

  let adjustedHours = hours;
  if (period === "PM" && hours !== 12) {
    adjustedHours += 12;
  } else if (period === "AM" && hours === 12) {
    adjustedHours = 0;
  }

  const date = timeStr
    ? new Date(Date.UTC(year, month - 1, day, adjustedHours, minutes))
    : new Date(Date.UTC(year, month - 1, day));

  return date.toISOString();
}

// Check if date is expired
export const isDateExpired = (dateStr: string) => {
  const now = new Date();
  const date = new Date(dateStr);

  const currentTimeStamp = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes()
  ).getTime();

  const dateTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  ).getTime();

  return dateTimeStamp <= currentTimeStamp;
};

// Convert to ISO 8601 with UTC
export function convertToISO8601WithUTC(dateString?: string) {
  if (!dateString) return "";

  if (dateString.endsWith("Z")) return dateString;

  return new Date(dateString).toISOString();
}

// Get Relative Date
export function getRelativeDate(dateString: string): string {
  const date = new Date(convertToISO8601WithUTC(dateString));
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

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

// Short Format
export const formatDateShort = (date: Date | string): string => {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en-GB", options);
};
