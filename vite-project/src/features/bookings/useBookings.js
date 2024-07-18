import { getBookings } from "../../services/apiBookings";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //query key acts similar to a dependency array. everytime filter is updated, the object is re-rendered
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1], //query key acts similar to a dependency array. everytime filter is updated, the object is re-rendered
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  return { isLoading, bookings, error, count };
}
