export const requestByApiDataKey: Record<keyof ApiData, () => unknown> = {
  // bookingStatus: getBookingStatus,
};

export type ApiData = {
  // bookingStatus: GetType<typeof getBookingStatus>;
};

type GetType<T extends () => void> = Awaited<ReturnType<T>>;
