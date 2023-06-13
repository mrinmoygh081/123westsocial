import { toast } from "react-toastify";

export const checkBookingData = (data) => {
  if (data?.name === undefined || data?.name === "") {
    toast.error("Your name is required");
    return false;
  }
  if (data?.date === undefined || data?.date === "") {
    toast.error("Your date is required");
    return false;
  }
  if (data?.phone === undefined || data?.phone === "") {
    toast.error("Your phone is required");
    return false;
  }
  if (data?.email === undefined || data?.email === "") {
    toast.error("Your email is required");
    return false;
  }
  if (data?.address === undefined || data?.address === "") {
    toast.error("Your adress is required");
    return false;
  }
  if (data?.numOfGuests === undefined || data?.numOfGuests === "") {
    toast.error("Your number of guests is required");
    return false;
  }
  if (data?.hours === undefined || data?.hours === "") {
    toast.error("You have to mention hours you want to book it");
    return false;
  }
  return true;
};

export const checkBookingDaysData = (data) => {
  if (data?.name === undefined || data?.name === "") {
    toast.error("Your name is required");
    return false;
  }
  if (data?.phone === undefined || data?.phone === "") {
    toast.error("Your phone is required");
    return false;
  }
  if (data?.email === undefined || data?.email === "") {
    toast.error("Your email is required");
    return false;
  }
  if (data?.address === undefined || data?.address === "") {
    toast.error("Your adress is required");
    return false;
  }
  if (data?.numOfGuests === undefined || data?.numOfGuests === "") {
    toast.error("Your number of guests is required");
    return false;
  }
  if (data?.days === undefined || data?.days === "") {
    toast.error("You have to mention booking days you want to book it");
    return false;
  }
  return true;
};
