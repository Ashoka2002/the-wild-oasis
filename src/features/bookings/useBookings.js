import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const { error, isLoading, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { error, isLoading, data };
}
