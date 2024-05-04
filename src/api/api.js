import axiosInstance from "./axiosInstance";

export const getSlotsApi = async (startDate, endDate) => {
  const data = await axiosInstance.get(
    `/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
  );
  return data;
};
