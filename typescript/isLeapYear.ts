function isLeapYear(year: number) {
  return new Date(year, 1, 29).getDate() === 29;
}
