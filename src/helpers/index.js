import moment from 'moment'

export function getDateDiff (dateFrom, dateTo) {
    // Два времени (можно использовать любые две даты)
    const startDate = moment(dateFrom);
    const endDate = moment(dateTo);

    // Получаем разницу между датами в миллисекундах
    const duration = moment.duration(endDate.diff(startDate));

    // Извлекаем часы и минуты
    const hours = duration.hours();
    const minutes = duration.minutes();

    // Форматируем строку
    const formattedDifference = `${hours} ч. ${minutes} м.`;

    return formattedDifference;
}

export function decline(number, wordForms) {
  const cases = [2, 0, 1, 1, 1, 2]; // правила склонения для чисел
  const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];

  return wordForms[index];
}