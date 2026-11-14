// 1. Запит todo
async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error(`Помилка запиту todo: ${response.status}`);
  }
  return response.json();
}

// 2. Запит user
async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error(`Помилка запиту user: ${response.status}`);
  }
  return response.json();
}

// 3. Promise.all та Promise.race
async function main() {
  try {
    const allResult = await Promise.all([getTodo(), getUser()]);
    const [todo, user] = allResult;
    console.log('Promise.all → todo:', todo);
    console.log('Promise.all → user:', user);
  } catch (error) {
    console.error('Promise.all помилка:', error.message);
  }

  try {
    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race → перший результат:', raceResult);
  } catch (error) {
    console.error('Promise.race помилка:', error.message);
  }
}

main();