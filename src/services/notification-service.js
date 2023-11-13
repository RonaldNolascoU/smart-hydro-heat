import BaseService from './_base-service';

class NotificationService extends BaseService {
     getNotifications() {
          return this.get(`/notifications`);
     }

     createNotification(notification) {
          return this.post('/notifications', notification)
     }
}

export default new NotificationService();