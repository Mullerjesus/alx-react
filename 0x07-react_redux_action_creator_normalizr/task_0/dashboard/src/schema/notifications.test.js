import { normalize } from 'normalizr';
import { notificationsList, notification } from './notifications';

describe('Notifications schema', () => {
  const data = [
    {
      id: '1',
      message: 'Notification 1',
      author: { id: 'user-1', name: 'User 1' },
    },
    {
      id: '2',
      message: 'Notification 2',
      author: { id: 'user-2', name: 'User 2' },
    },
  ];

  it('should normalize a list of notifications', () => {
    const normalizedData = normalize(data, notificationsList);

    expect(normalizedData.entities.notifications).toHaveProperty('1');
    expect(normalizedData.entities.notifications).toHaveProperty('2');
    expect(normalizedData.entities.users).toHaveProperty('user-1');
    expect(normalizedData.entities.users).toHaveProperty('user-2');
  });

  it('should normalize a single notification', () => {
    const singleNotification = data[0];
    const normalizedData = normalize(singleNotification, notification);

    expect(normalizedData.entities.notifications).toHaveProperty('1');
    expect(normalizedData.entities.users).toHaveProperty('user-1');
  });
});
