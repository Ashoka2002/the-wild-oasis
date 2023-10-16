import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // : { field: "totalPrice", value: 5000, method: "gte" };

  //Sort
  const sortByString = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByString.split("-");

  const sortBy = { field, direction };

  const {
    error,
    isLoading,
    data: { data, count },
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { error, isLoading, data, count };
}
