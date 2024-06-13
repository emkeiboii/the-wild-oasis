import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isLoading: isAdding } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabins successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addCabin };
}
