import { newPost, postFetch } from "../Interfaces";

export const HOME_FETCH = "HOME_FETCH";

export const FetchHome = async () => {
  try {
    let res = await fetch(`https://striveschool-api.herokuapp.com/api/posts`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data.reverse();
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addMyPost = async (params: newPost) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/posts/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
      },
      body: JSON.stringify(params),
    }
  );
  let newRequest = await requestOptions.json();
  return newRequest;
};

export const addMyPostImg = async (id: string, fd: FormData) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/posts/${id}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
      },
      body: fd,
    }
  );
};
export const changeMyPost = async (params: newPost) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/posts/${params._id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
      },
      body: JSON.stringify(params),
    }
  );
};

export const deletePost = async (params: newPost) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/posts/${params._id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
      },
      body: JSON.stringify(params),
    }
  );
};
