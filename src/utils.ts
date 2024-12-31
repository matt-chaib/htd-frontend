export function getTimeUntilEndOfDay() {
    const now: Date = new Date();
    const endOfDay: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Next midnight
    return endOfDay.getTime() - now.getTime(); // Milliseconds until midnight
  }