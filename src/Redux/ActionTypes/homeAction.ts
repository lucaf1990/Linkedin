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
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
