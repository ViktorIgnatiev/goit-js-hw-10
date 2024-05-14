 
 // Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
 
 // Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


 // Опції для flatpickr
 const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();

      // Перевірка, чи обрана дата в майбутньому
      if (selectedDate.getTime() <= currentDate.getTime()) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        document.querySelector('[data-start]').disabled = true;
      } else {
        document.querySelector('[data-start]').disabled = false;
      }
    },
  };

  // Ініціалізація flatpickr
  flatpickr('#datetime-picker', options);

  // Початок відліку
  document.querySelector('[data-start]').addEventListener('click', () => {
    const endDate = new Date(document.getElementById('datetime-picker').value);
    const timerInterval = setInterval(updateTimer, 1000);

    // Вимкнення кнопки після натискання
    document.querySelector('[data-start]').disabled = true;

    // Функція оновлення таймера
    function updateTimer() {
      const currentTime = new Date();
      const timeDifference = endDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        updateUI(0, 0, 0, 0);
        iziToast.success({
          title: 'Success',
          message: 'Countdown finished!',
        });
        document.querySelector('[data-start]').disabled = false;
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateUI(days, hours, minutes, seconds);
    }

    // Функція форматування числа (додавання 0, якщо менше двох символів)
    function addLeadingZero(value) {
      return value < 10 ? `0${value}` : value;
    }

    // Функція оновлення інтерфейсу таймера
    function updateUI(days, hours, minutes, seconds) {
      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }
  });

  // Функція конвертації мілісекунд у дні, години, хвилини та секунди
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }