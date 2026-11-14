// 1. Запит todo
function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту todo: ${response.status}`);
      }
      return response.json();
    });
}

// 2. Запит user
function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту user: ${response.status}`);
      }
      return response.json();
    });
}

// 3. Promise.all та Promise.race
const allResult = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResult
  .then(([todo, user]) => {
    console.log('Promise.all → todo:', todo);
    console.log('Promise.all → user:', user);
  })
  .catch((error) => console.error('Promise.all помилка:', error.message));

raceResult
  .then((result) => console.log('Promise.race → перший результат:', result))
  .catch((error) => console.error('Promise.race помилка:', error.message));