import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckout } from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { isCheckingout, checkout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingout}
    >
      {isCheckingout ? <SpinnerMini /> : "Check out"}
    </Button>
  );
}

export default CheckoutButton;
