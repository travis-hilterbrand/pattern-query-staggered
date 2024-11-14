import { useEffect, useState } from "react";
import { useGetReport } from "../hooks/useGetReport";
import { GetReportParams } from "../api/reports";
import { sleep } from "../utils";

export const Report = () => {
  const [params, setParams] = useState<GetReportParams>({ delay: 0, count: 0 });
  const { data } = useGetReport(params);

  useEffect(() => {
    const doSequence = async () => {
      await sleep(200);
      setParams({ delay: 2000, count: 1 });
      await sleep(200);
      setParams({ delay: 1000, count: 2 });
      await sleep(200);
      setParams({ delay: 500, count: 3 });
    };
    doSequence();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};
