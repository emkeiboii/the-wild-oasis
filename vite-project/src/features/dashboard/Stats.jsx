/* eslint-disable react/prop-types */

import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //calculate number of booking
  const numBookings = bookings.length;

  //calculate number of sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //calculate number of check ins
  // const checkIns = confirmedStays.filter(
  //   (stay) => stay.status === "checked-in"
  // ).length;
  const checkIns = confirmedStays.length;

  //ratio checked in nights / night available
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount.length);

  //num checked in nights/ all available nights(numDays* numCabins)

  return (
    <>
      <Stat
        value={numBookings}
        title={"Bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        value={formatCurrency(sales)}
        title={"Sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        value={checkIns}
        title={"Check ins"}
        color={"indigo"}
        icon={<HiOutlineCalendar />}
      />
      <Stat
        value={Math.round(occupation * 100) + "%"}
        title={"Occupancy rate"}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
