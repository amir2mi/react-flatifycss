import getUuidByString from 'uuid-by-string';

/**
 * Get unique ID based on the given string.
 */
export default function getUniqueID(
  str: string | number | undefined | null,
  limit: number = 16
) {
  return getUuidByString(
    (str || Math.ceil(Math.random() * 99999)).toString()
  ).slice(0, limit);
}
