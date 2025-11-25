(function renderCalendar(month, year) {
  // month: 0..11 (0 — январь). Пример для ноября 2025: month = 10, year = 2025
  const title = document.getElementById('calendar-title');
  const body = document.getElementById('calendar-body');
  const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

  title.textContent = `${months[month]} ${year}`;
  body.innerHTML = '';

  const first = new Date(year, month, 1);
  // день недели (0..6) — в JS воскресенье=0; нам удобнее считать понедельник=0
  let startDay = (first.getDay() + 6) % 7; // 0 = ПН

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let day = 1;

  while (day <= daysInMonth) {
    const tr = document.createElement('tr');
    tr.className = 'calendar__row';

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      td.className = 'calendar__cell';

      // помечаем выходные (индексы 5=СБ,6=ВС)
      if (i === 5 || i === 6) td.classList.add('calendar__cell--weekend');

      if (day === 1 && i < startDay) {
        td.textContent = '';
      } else if (day > daysInMonth) {
        td.textContent = '';
      } else {
        td.textContent = day;
        day++;
      }

      tr.appendChild(td);
    }

    body.appendChild(tr);
  }
})(10, 2025); // здесь month=10 (ноябрь), year=2025