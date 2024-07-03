import { useQuery } from "react-query";
import { BASE_URL } from "../../services/auth-services";
import { axiosInstance } from "../../services/config";

// < -------------------------------------------------- get Sales Invoice All Additional --------------------------------------------------
const getSalesInvoicAdditional = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/SalesInvoiceAllAdditional/`
    );
    return response.data?.results;
  } catch (error) {
    console.error(
      "Error fetching data for Sales Invoice All Additional:",
      error
    );
    throw new Error(
      error.response?.data?.message ||
        "Error fetching data for Sales Invoice All Additional"
    );
  }
};

// < --------------------------------------------------  start use query functions --------------------------------------------------

const useSalesInvoicAdditional = () => {
  const {
    data: getSalesInvoicData,
    isLoading: isLoadingSalesInvoicData,
    isError: isErrorSalesInvoicData,
    refetch: refetchSalesInvoicData,
  } = useQuery("refetchSalesInvoicAdditional", getSalesInvoicAdditional, {
    staleTime: Infinity,
  });

  return {
    getSalesInvoicData,
    isLoadingSalesInvoicData,
    isErrorSalesInvoicData,
    refetchSalesInvoicData,
  };
};

export { useSalesInvoicAdditional };
