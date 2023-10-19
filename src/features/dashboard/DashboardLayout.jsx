import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: bookingsLoading, bookings, numDays } = useRecentBookings();
  const { isLoading: staysLoading, stays, confirmStays } = useRecentStays();
  const { cabins, isLoadingCabin } = useCabin();

  if (bookingsLoading || staysLoading || isLoadingCabin) return <Spinner />;
  const cabinCount = cabins.length;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <div>Today's Activity</div>
      <div>Chart stay Duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
