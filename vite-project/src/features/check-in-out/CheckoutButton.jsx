/* eslint-disable react/prop-types */
import { useCheckOut } from "./useCheckOut";
import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckOuting } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckOuting}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
