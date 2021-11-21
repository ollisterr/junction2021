/**
 * Generated by orval v6.3.0 🍺
 * Do not edit manually.
 * Drop API
 * The OpenAPI schema for drop.energy
 * OpenAPI spec version: 0.1.0
 */
import { useQuery, UseQueryOptions, QueryFunction } from "react-query";
import type { HTTPValidationError } from ".././model";
import { customInstance } from ".././axios";

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

/**
 * @summary Hygiene Scores
 */
export const hygieneScoresKpiHygieneScoresGroupIdDateGet = (
  groupid: number,
  date: string
) => {
  return customInstance<unknown>({
    url: `/kpi/hygiene-scores/${groupid}/${date}`,
    method: "get",
  });
};

export const getHygieneScoresKpiHygieneScoresGroupIdDateGetQueryKey = (
  groupid: number,
  date: string
) => [`/kpi/hygiene-scores/${groupid}/${date}`];

export const useHygieneScoresKpiHygieneScoresGroupIdDateGet = <
  TData = AsyncReturnType<typeof hygieneScoresKpiHygieneScoresGroupIdDateGet>,
  TError = HTTPValidationError
>(
  groupid: number,
  date: string,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<typeof hygieneScoresKpiHygieneScoresGroupIdDateGet>,
      TError,
      TData
    >;
  }
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getHygieneScoresKpiHygieneScoresGroupIdDateGetQueryKey(groupid, date);

  const queryFn: QueryFunction<
    AsyncReturnType<typeof hygieneScoresKpiHygieneScoresGroupIdDateGet>
  > = () => hygieneScoresKpiHygieneScoresGroupIdDateGet(groupid, date);

  const query = useQuery<
    AsyncReturnType<typeof hygieneScoresKpiHygieneScoresGroupIdDateGet>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!(groupid && date), ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Sustainability Scores
 */
export const sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet = (
  groupid: number,
  date: string
) => {
  return customInstance<unknown>({
    url: `/kpi/sustainability-scores/${groupid}/${date}`,
    method: "get",
  });
};

export const getSustainabilityScoresKpiSustainabilityScoresGroupIdDateGetQueryKey =
  (groupid: number, date: string) => [
    `/kpi/sustainability-scores/${groupid}/${date}`,
  ];

export const useSustainabilityScoresKpiSustainabilityScoresGroupIdDateGet = <
  TData = AsyncReturnType<
    typeof sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet
  >,
  TError = HTTPValidationError
>(
  groupid: number,
  date: string,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<
        typeof sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet
      >,
      TError,
      TData
    >;
  }
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getSustainabilityScoresKpiSustainabilityScoresGroupIdDateGetQueryKey(
      groupid,
      date
    );

  const queryFn: QueryFunction<
    AsyncReturnType<
      typeof sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet
    >
  > = () =>
    sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet(groupid, date);

  const query = useQuery<
    AsyncReturnType<
      typeof sustainabilityScoresKpiSustainabilityScoresGroupIdDateGet
    >,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!(groupid && date), ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Get User Weekly Trend
 */
export const getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet = (
  apartmentid: number
) => {
  return customInstance<number>({
    url: `/kpi/weekly-change/${apartmentid}`,
    method: "get",
  });
};

export const getGetUserWeeklyTrendKpiWeeklyChangeApartmentIdGetQueryKey = (
  apartmentid: number
) => [`/kpi/weekly-change/${apartmentid}`];

export const useGetUserWeeklyTrendKpiWeeklyChangeApartmentIdGet = <
  TData = AsyncReturnType<
    typeof getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet
  >,
  TError = HTTPValidationError
>(
  apartmentid: number,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<typeof getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet>,
      TError,
      TData
    >;
  }
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetUserWeeklyTrendKpiWeeklyChangeApartmentIdGetQueryKey(apartmentid);

  const queryFn: QueryFunction<
    AsyncReturnType<typeof getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet>
  > = () => getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet(apartmentid);

  const query = useQuery<
    AsyncReturnType<typeof getUserWeeklyTrendKpiWeeklyChangeApartmentIdGet>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!apartmentid, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};
