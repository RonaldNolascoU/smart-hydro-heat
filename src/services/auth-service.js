import BaseService from './_base-service';

class AuthService extends BaseService {
  login(data) {
    console.log(data, 'data');
    return this.post('/auth/login', data);
  }

  getProfile() {
    return this.get('/profile');
  }

  register(data) {
    return this.post('/auth/register', data);
  }
}

export default new AuthService();
