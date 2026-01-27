import { api } from "@/utils/api";
import { createBookingRequest } from "@/validators/booking.schema";

export const createBooking = async (payload: createBookingRequest) => {
  const res = await api("/bookings", {
    method: "POST",
    body: payload,
  });

  return res.data;
};
