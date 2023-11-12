import BaseService from './_base-service';

class NotificationService extends BaseService {
     getNotifications() {
          return this.get(`/notification`);
     }

     createNotification(notification) {
          return this.post('/notification', notification)
     }
}

export default new NotificationService();