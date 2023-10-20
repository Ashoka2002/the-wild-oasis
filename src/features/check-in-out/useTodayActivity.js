import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: todayActivity } = useQuery({
    queryKey: ["todayActivity"],
    queryFn: getStaysTodayActivity,
  });

  return { isLoading, todayActivity };
}
