export function formatDateToItalianLiteral(isoDate) {
  // Parsa la data
  const date = new Date(isoDate);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };


  return new Intl.DateTimeFormat('it-IT', options).format(date);
}
