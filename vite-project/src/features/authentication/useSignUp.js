/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account succesfully created. Please verify the new account, from the users's email address"
      );
    },
  });
  return { signUp, isLoading };
}
