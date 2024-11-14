import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { sleep } from "../utils";

const getParamInt = (param: string | null): number => {
  if (param) {
    return parseInt(param);
  }
  return 0;
};

export const worker = setupWorker(
  http.get("/report", async ({ request }) => {
    const url = new URL(request.url);
    const count: number = getParamInt(url.searchParams.get("count"));
    const delay: number = getParamInt(url.searchParams.get("delay"));
    await sleep(delay);
    return HttpResponse.json({ count, delay });
  })
);
