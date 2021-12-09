export const getUsers = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
}

export const getMessages = async (number) => {
  const messages = [];
  for (let i = 0; i < number; i++) {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json();
    messages.push(data.value)
  }
  return messages;
};

export const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await res.json();
  return data.value;
}