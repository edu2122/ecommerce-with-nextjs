export default function getAnonymousUserId() {
  // Generate a random number between 1 and 1000000
  const randomId = Math.floor(Math.random() * 1000000) + 1
  return `user-${randomId}`
}