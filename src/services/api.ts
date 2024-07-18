import axios from "axios";

const FACT_API_URL = "https://meowfacts.herokuapp.com";

const GIF_API_URL = "https://api.giphy.com/v1/gifs/random";

const GIF_API_KEY = "OkjM1ZYwu3BwggQXm7jnnyvVuwFPE12o";

export async function getCatFact(): Promise<string> {
  const result = await axios.get(FACT_API_URL);

  if (!result.data.data[0]) {
    throw new Error("Data not found");
  }

  return result.data.data[0];
}

export async function getCatGif(): Promise<string> {
  const params = {
    api_key: GIF_API_KEY,
    tag: "cat",
  };
  const result = await axios.get(GIF_API_URL, { params });

  // if (!result.data.data[0]) {
  //   throw new Error("Data not found");
  // }

  return result.data.data.images.original.url;
}
