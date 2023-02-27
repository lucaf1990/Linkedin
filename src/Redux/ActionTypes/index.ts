export const PROFILES_FETCH = "PROFILES_FETCH";
export const ME = "ME";

export const FetchMyProfile = async (endPoint: string) => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${endPoint}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjViMWYxOTNlNjAwMTM4MDdmNGUiLCJpYXQiOjE2Nzc0ODU0OTAsImV4cCI6MTY3ODY5NTA5MH0.jLHyxn39KIUUwQUfidKv8LPnbyoGAa5Mc6Zmgo8WHQg",
        },
      }
    );
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
