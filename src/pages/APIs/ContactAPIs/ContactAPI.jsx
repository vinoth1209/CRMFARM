import { useQuery } from "react-query";
import { axiosInstance } from "../../../services/config";
import { BASE_URL } from "../../../services/auth-services";

// < -------------------------------------------------- get Contact All List --------------------------------------------------
const getContactAdditionalList = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/ContactAllAdditional/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Contact Additional:", error);
    throw new Error(
      error.response?.data?.message ||
        "Error fetching data for Contact Additional"
    );
  }
};

// < -------------------------------------------------- get Contact My List --------------------------------------------------
const getContactAdditionalMyList = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/ContactAdditional/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Contact Additional My List:", error);
    throw new Error(
      error.response?.data?.message ||
        "Error fetching data for Contact Additional My List"
    );
  }
};

// < --------------------------------------------------  start use query functions --------------------------------------------------

const useContactAdditionalList = () => {
  const {
    data: getContactList,
    isLoading: isLoadingContactList,
    isError: isErrorContactList,
    refetch: refetchContactList,
  } = useQuery("refetchContactAdditionalList", getContactAdditionalList, {
    staleTime: Infinity,
  });

  return {
    getContactList,
    isLoadingContactList,
    isErrorContactList,
    refetchContactList,
  };
};

const useContactAdditionalMyList = () => {
  const {
    data: getContactMyList,
    isLoading: isLoadingContactMyList,
    isError: isErrorContactMyList,
    refetch: refetchContactMyList,
  } = useQuery("refetchContactAdditionalMyList", getContactAdditionalMyList, {
    staleTime: Infinity,
  });

  return {
    getContactMyList,
    isLoadingContactMyList,
    isErrorContactMyList,
    refetchContactMyList,
  };
};

export { useContactAdditionalList, useContactAdditionalMyList };
