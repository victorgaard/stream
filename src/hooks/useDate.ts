export const useDate = () => {
  const date = new Date().setDate(9);

  const dateInDigits = Intl.DateTimeFormat("pt-BR", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  }).format(date);

  const friendlyDate = Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(date);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return { dateInDigits, friendlyDate, time };
};
