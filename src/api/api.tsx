export const fetchAuthors = async () => {
  const url = "https://poetrydb.org/author";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data["authors"];
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const fetchPoems = async (name) => {
  const url = `https://poetrydb.org/author/${name}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
