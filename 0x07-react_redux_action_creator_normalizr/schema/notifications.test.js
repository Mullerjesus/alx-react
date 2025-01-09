import { getAllNotificationsByUser } from '../src/notifications';

test('getAllNotificationsByUser returns notifications for the correct user', () => {
  const userId = '5';
  const expectedOutput = [
    { guid: 'abc-123', userId: '5', isRead: false },
    { guid: 'xyz-456', userId: '5', isRead: true },
  ];

  expect(getAllNotificationsByUser(userId)).toEqual(expectedOutput);
});

test('getAllNotificationsByUser returns an empty array if no notifications for user', () => {
  const userId = '10';
  const expectedOutput = [];

  expect(getAllNotificationsByUser(userId)).toEqual(expectedOutput);
});
