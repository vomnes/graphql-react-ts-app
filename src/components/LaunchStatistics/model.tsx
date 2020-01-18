interface totalLaunches {
  success: number,
  fail: number,
}

interface year {
  [key: number]: number,
}

interface StatInterface {
  total: totalLaunches,
  perYear: year,
  upcoming: number,
}

export default StatInterface;
