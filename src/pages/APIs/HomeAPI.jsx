import { useQuery } from "react-query";
import { BASE_URL } from "../../services/auth-services";
import { axiosInstance } from "../../services/config";

// < -------------------------------------------------- get Lead Enquiry --------------------------------------------------
const getLeadEnquiry = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/LeadbysourceEnquiry/`
    );
    // console.log("getOrganisation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Lead Enquiry:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching data for Lead Enquiry"
    );
  }
};

// < -------------------------------------------------- get Lead Campaign --------------------------------------------------
const getLeadCampaign = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/LeadbysourceCampaign/`
    );
    // console.log("getOrganisation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Lead Campaign:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching data for Lead Campaign"
    );
  }
};

// < -------------------------------------------------- get Lead Social media --------------------------------------------------
const getLeadSocialMedia = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/LeadbysourceSocial/`
    );
    // console.log("getOrganisation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Lead Social Media:", error);
    throw new Error(
      error.response?.data?.message ||
        "Error fetching data for Lead Social Media"
    );
  }
};

// < -------------------------------------------------- get Lead Web --------------------------------------------------
const getLeadWeb = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/LeadbysourceWeb/`
    );
    // console.log("getOrganisation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Lead Web:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching data for Lead Web"
    );
  }
};

// < -------------------------------------------------- get Lead Contact --------------------------------------------------
const getLeadContact = async () => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/user/LeadbysourceContact/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data for Lead Contact:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching data for Lead Contact"
    );
  }
};

// < --------------------------------------------------  start use query functions --------------------------------------------------

const useLeadEnquiry = () => {
  const {
    data: getLeadEnquiryData,
    isLoading: isLoadingGetLeadEnquiryData,
    isError: isErrorGetLeadEnquiryData,
    refetch: refetchLeadEnquiryData,
  } = useQuery("refetchLeadEnquiryData", getLeadEnquiry, {
    staleTime: Infinity,
  });

  return {
    getLeadEnquiryData,
    isLoadingGetLeadEnquiryData,
    isErrorGetLeadEnquiryData,
    refetchLeadEnquiryData,
  };
};
const useLeadCampaign = () => {
  const {
    data: getLeadCampaignData,
    isLoading: isLoadingGetLeadCampaignData,
    isError: isErrorGetLeadCampaignData,
    refetch: refetchLeadCampaignData,
  } = useQuery("refetchLeadCampaignData", getLeadCampaign, {
    staleTime: Infinity,
  });

  return {
    getLeadCampaignData,
    isLoadingGetLeadCampaignData,
    isErrorGetLeadCampaignData,
    refetchLeadCampaignData,
  };
};
const useLeadSocialMedia = () => {
  const {
    data: getLeadSocialMediaData,
    isLoading: isLoadingGetLeadSocialMediaData,
    isError: isErrorGetLeadSocialMediaData,
    refetch: refetchLeadSocialMediaData,
  } = useQuery("refetchLeadSocialMediaData", getLeadSocialMedia, {
    staleTime: Infinity,
  });

  return {
    getLeadSocialMediaData,
    isLoadingGetLeadSocialMediaData,
    isErrorGetLeadSocialMediaData,
    refetchLeadSocialMediaData,
  };
};
const useLeadWeb = () => {
  const {
    data: getLeadEWebData,
    isLoading: isLoadingGetLeadEWebData,
    isError: isErrorGetLeadEWebData,
    refetch: refetchLeadEWebData,
  } = useQuery("refetchLeadEWebData", getLeadWeb, {
    staleTime: Infinity,
  });

  return {
    getLeadEWebData,
    isLoadingGetLeadEWebData,
    isErrorGetLeadEWebData,
    refetchLeadEWebData,
  };
};
const useLeadContact = () => {
  const {
    data: getLeadContactData,
    isLoading: isLoadingGetLeadContactData,
    isError: isErrorGetLeadContactData,
    refetch: refetchLeadContactData,
  } = useQuery("refetchLeadContactData", getLeadContact, {
    staleTime: Infinity,
  });

  return {
    getLeadContactData,
    isLoadingGetLeadContactData,
    isErrorGetLeadContactData,
    refetchLeadContactData,
  };
};

// ------------------------------ exports all apis ------------------------------->
export {
  useLeadEnquiry,
  useLeadCampaign,
  useLeadSocialMedia,
  useLeadWeb,
  useLeadContact,
};
