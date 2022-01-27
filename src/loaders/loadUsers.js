import UserData from "../json-data/users.json";

const now = Date();

/**
 * @summary load Groups data
 * @param {Object} context - The application context
 * @returns {Promise<boolean>} true if success
 */
export default async function loadUsers(context) {
  const { collections: { users } } = context;
  UserData.forEach((user) => {
    user.createdAt = now;
    user.updatedAt = now;
  });
  users.insertMany(UserData);
  return true;
}
