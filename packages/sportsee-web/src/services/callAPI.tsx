export async function callAPI(userId: string, category: string) {
  //category list: '' for main data, '/activity', '/average-session', '/performance'
  const response = await fetch(
    `http://localhost:3000/user/${userId}${category}`
  );
  const userData = await response.json();
  return userData.data;
}
