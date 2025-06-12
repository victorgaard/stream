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

  const isoToDDMMYYYY = (isoString: string): string => {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  return { dateInDigits, friendlyDate, time, isoToDDMMYYYY };
};
