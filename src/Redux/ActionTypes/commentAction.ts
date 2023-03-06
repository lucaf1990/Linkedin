export const COMMENTS_FETCH = "COMMENTS_FETCH";

export const fetchComments = async () => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YTk4ODAyY2FjZDAwMTMyZjE5NzgiLCJpYXQiOjE2NzgwOTI2ODEsImV4cCI6MTY3OTMwMjI4MX0.aFKPwWmLXrcaMPRDZ_XC1Efysfso80qFYtHm1VKZbrs",
        },
      }
    );
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
