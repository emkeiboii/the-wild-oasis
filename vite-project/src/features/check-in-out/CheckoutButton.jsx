/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

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
