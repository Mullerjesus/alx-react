import { schema } from 'normalizr';

// Define a user schema
export const user = new schema.Entity('users');

// Define a notification schema
export const notification = new schema.Entity('notifications', {
  author: user,
});

// Define an array schema for notifications
export const notificationsList = [notification];
