const getUUID = require('uuid-by-string');

/**
 * Get unique ID based on the given string.
 * @param str If the string is empty, a random UUID will be generated.
 * @param limit limit the length of the ID to this number of characters.
 * @returns {string} The generated ID.
 */
export default function getUniqueID(
  str: string | number | undefined | null,
  limit: number = 16
) {
  return getUUID(str || Math.ceil(Math.random() * 99999).toString()).slice(
    0,
    limit
  );
}
