export type OrderDataType = {
  id: number;
  orderId: string;
  date: string;
  name: string;
  location: string;
  amount: number;
  orderStatus: string;
};

export const defaultData: OrderDataType[] = [
  {
    id: 1,
    orderId: "123451",
    date: "2025-09-22",
    name: "Mahesh 01",
    location: "Nepal",
    amount: 123,
    orderStatus: "Delivered",
  },
  {
    id: 2,
    orderId: "12345 2",
    date: "2025-09-22",
    name: "Mahesh 02",
    location: "Nepal",
    amount: 123,
    orderStatus: "Cancelled",
  },
  {
    id: 3,
    orderId: "12345 3",
    date: "2025-09-22",
    name: "Mahesh 03",
    location: "Nepal",
    amount: 123,
    orderStatus: "Pending",
  },
  {
    id: 4,
    orderId: "12345 4",
    date: "2025-09-22",
    name: "Mahesh 04",
    location: "Nepal",
    amount: 123,
    orderStatus: "Delivered",
  },
  {
    id: 5,
    orderId: "12345 5",
    date: "2025-09-22",
    name: "Mahesh 05",
    location: "Nepal",
    amount: 123,
    orderStatus: "Delivered",
  },
];
