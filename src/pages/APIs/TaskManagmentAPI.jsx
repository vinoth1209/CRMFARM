import { useQuery } from "react-query";
import { BASE_URL } from "../../services/auth-services";
import { axiosInstance } from "../../services/config";

// < -------------------------------------------------- get Task Calendar Additional--------------------------------------------------
const getTaskCalendarAdditional = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/TaskCalendarAdditional/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Task Calendar Additional:", error);
    throw new Error(
      error.response?.data?.message ||
        "Error fetching data forTask Calendar Additional"
    );
  }
};

// < --------------------------------------------------  start use query functions --------------------------------------------------

const useTaskCalendarAdditional = () => {
  const {
    data: getTaskCalendarData,
    isLoading: isLoadingTaskCalendarData,
    isError: isErrorTaskCalendarData,
    refetch: refetchTaskCalendarData,
  } = useQuery("refetchTaskCalendarAdditional", getTaskCalendarAdditional, {
    staleTime: Infinity,
  });

  return {
    getTaskCalendarData,
    isLoadingTaskCalendarData,
    isErrorTaskCalendarData,
    refetchTaskCalendarData,
  };
};

export { useTaskCalendarAdditional };
