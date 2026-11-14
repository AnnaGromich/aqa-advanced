class ApiService {
  constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    if (!response.ok) {
      throw new Error(`Помилка запиту ${path}: ${response.status}`);
    }
    return response.json();
  }
}

class TodoService extends ApiService {
  getTodo(id = 1) {
    return this.get(`/todos/${id}`);
  }
}

class UserService extends ApiService {
  getUser(id = 1) {
    return this.get(`/users/${id}`);
  }
}