import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: bookingsLoading, bookings } = useRecentBookings();
  const { isLoading: staysLoading, stays, confirmStays } = useRecentStays();

  if (bookingsLoading || staysLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statics</div>
      <div>Today's Activity</div>
      <div>Chart stay Duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
