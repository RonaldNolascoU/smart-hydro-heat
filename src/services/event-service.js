import BaseService from './_base-service';

class EventService extends BaseService {
  encender(data) {
    return this.post('/events/create', data);
  }

  apagar(data) {
    return this.put('/events/update-recent', data);
  }

  getHistory() {
    return this.get('/events/');
  }
}

export default new EventService();
