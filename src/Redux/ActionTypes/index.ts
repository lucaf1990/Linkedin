import { Params } from "react-router-dom";
import { MyExperienceChanges, MyProfileChanges } from "../Interfaces";

export const PROFILES_FETCH = "PROFILES_FETCH";
export const ME = "ME";
export const EXPERIENCE_FETCH = "EXPERIENCE_FETCH";

const beboKey = process.env.REACT_APP_BEBO_SECRET_KEY;
const lucaKey = process.env.REACT_APP_LUCA_SECRET_KEY;
const daniKey = process.env.REACT_APP_DANI_SECRET_KEY;
const kevinKey = process.env.REACT_APP_KEVIN_SECRET_KEY;

export const fetchMyProfile = async (id: string | undefined) => {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${lucaKey}`,
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
          Authorization: `Bearer ${lucaKey}`,
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
        Authorization: `Bearer ${lucaKey}`,
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
          Authorization: `Bearer ${lucaKey}`,
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
        Authorization: `Bearer ${lucaKey}`,
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
        Authorization: `Bearer ${lucaKey}`,
      },
      body: JSON.stringify(params),
    }
  );
  let newExp = await requestOptions.json();
  return newExp;
};

export const deleteExp = async (params: MyExperienceChanges) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${params._id}/experiences/${params._id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lucaKey}`,
      },
      body: JSON.stringify(params),
    }
  );
};
export const uploadPost = async (id: string, fd: FormData) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lucaKey}`,
      },
      body: fd,
    }
  );
};
export const uploadExpImg = async (id: string, expId: string, fd: FormData) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}/picture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lucaKey}`,
      },
      body: fd,
    }
  );
};
export const addMyImg = async (id: string, fd: FormData, userId: string) => {
  const requestOptions = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${id}/picture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lucaKey}`,
      },
      body: fd,
    }
  );
};
