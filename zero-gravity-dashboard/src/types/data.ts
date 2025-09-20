export type DashboardMetric = {
  id: string;
  label: string;
  value: number | string;
  delta?: number;
};

export type ChartSeriesPoint = {
  name: string;
  value: number;
};


