export const getCountChart = async () => {
  const res = await fetch("https://api-ddos.tic.ir/api/count-chart");
  const data = await res.json();
  return data;
};
export const getSumPPS = async () => {
  const res = await fetch("https://api-ddos.tic.ir/api/sum-pps");
  const data = await res.json();
  return data;
};
export const getSumIRL = async () => {
  const res = await fetch("https://api-ddos.tic.ir/api/sum-lrl");
  const data = await res.json();
  return data;
};
export const getChart = async () => {
  const res = await fetch("http://156.255.1.102:6523/task/chart");
  const data = await res.json();
  return data;
};
