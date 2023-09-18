async function getInfo(userID: string) {
  const response = await fetch(`http://localhost:3000/user/${userID}`);
  const data = await response.json();
  console.log(data);
}

export default getInfo;
