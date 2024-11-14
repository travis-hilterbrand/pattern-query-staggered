import axios from "axios";

export type GetReportParams = { delay: number; count: number };

export const getReport = async (params: GetReportParams): Promise<void> => {
  const response = await axios.get("/report", { params: params });
  return response.data;
};
