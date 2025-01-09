import { getAllNotificationsByUser } from './notifications';

test('getAllNotificationsByUser returns correct data', () => {
  const userId = '5';
  const expectedOutput = [
    { guid: 'abc-123', isRead: false },
    { guid: 'xyz-456', isRead: true }
  ];

  expect(getAllNotificationsByUser(userId)).toEqual(expect.arrayContaining(expectedOutput));
})
