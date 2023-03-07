import { Params } from "react-router-dom";
import { MyExperienceChanges, MyProfileChanges } from "../Interfaces";

export const PROFILES_FETCH = "PROFILES_FETCH";
export const ME = "ME";
export const EXPERIENCE_FETCH = "EXPERIENCE_FETCH";

export const fetchMyProfile = async (id:string|undefined) => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}`,
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

export const fetchMyExperience = async (params: string) => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${params}/experiences`,
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

export const changeMyInfo = async (params: MyExperienceChanges) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${params._id}/experiences/${params._id}`,
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
export const fetchProfiles = async () => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
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

export const changeMyProfileInfo = async (params: MyProfileChanges) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/`,
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
export const addMyInfo = async (params: MyExperienceChanges) => {
  const userId = params.user;
  delete params.user;
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
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
  let newExp = await requestOptions.json()
  return newExp
};

export const deleteExp = async (params: MyExperienceChanges) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${params._id}/experiences/${params._id}`,
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
export const uploadPost = async (id:string,fd:FormData) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
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
export const uploadExpImg = async (id:string,expId:string,fd:FormData) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}/picture`,
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
export const addMyImg = async (id:string,fd:FormData,userId:string) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${id}/picture`,
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
