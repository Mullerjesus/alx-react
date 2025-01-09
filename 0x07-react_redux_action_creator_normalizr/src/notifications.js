export const getAllNotificationsByUser = (userId) => {
  const notifications = [
    { guid: 'abc-123', userId: '5', isRead: false },
    { guid: 'xyz-456', userId: '5', isRead: true },
    { guid: 'uvw-789', userId: '7', isRead: false },
  ];

  return notifications.filter(notification => notification.userId === userId);
};
