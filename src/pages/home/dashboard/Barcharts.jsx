import { useEffect, useState } from "react";
import Barchart from "../../charts/Barchart";
import { useSalesInvoicAdditional } from "../../APIs/SalesAPI";
import { BarChartSkeleton } from "../../widget/StyledComponents";
import { Empty } from "antd";

const Barcharts = () => {
  const { getSalesInvoicData, isLoadingSalesInvoicData } =
    useSalesInvoicAdditional();
  const [data, setDatas] = useState([]);

  const organizeData = (datas) => {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;

    const getMonthFromDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleString("default", { month: "short" });
    };

    const fillMonthsWithZeroes = () => {
      const months = {};
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      monthNames.forEach((month) => {
        months[month] = 0;
      });

      return months;
    };

    const dataSet = fillMonthsWithZeroes();
    const previousYearData = {};
    const currentYearData = {};

    datas?.forEach((item) => {
      const monthName = getMonthFromDate(item.Created_Date);
      const monthValue = item.Paid_Amount;
      const itemYear = new Date(item.Created_Date).getFullYear();

      if (itemYear === previousYear) {
        previousYearData[monthName] = monthValue;
      } else if (itemYear === currentYear) {
        currentYearData[monthName] = monthValue;
      }
    });

    // Convert dataSet object to an array of objects
    const organizedData = Object.keys(dataSet).map((month) => ({
      label: month,
      "Previous Sales": previousYearData[month] || 0,
      "Current Sales": currentYearData[month] || 0,
    }));

    setDatas(organizedData);
    console.log("get Dataa", datas, organizedData);
  };

  useEffect(() => {
    if (getSalesInvoicData) {
      organizeData(getSalesInvoicData);
    }
  }, [getSalesInvoicData]);

  return (
    <>
      {isLoadingSalesInvoicData ? (
        <BarChartSkeleton barsCount={4} />
      ) : data?.every(
          (it) => it?.["Previous Sales"] == 0 && it?.["Current Sales"] == 0
        ) ? (
        <Empty />
      ) : (
        <Barchart data={data} legend={["Current Sales", "Previous Sales"]} />
      )}
    </>
  );
};

export default Barcharts;
