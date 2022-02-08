import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./UserChartViews.module.scss";
import { users_statistic } from "./../../users_statistic";

const UserChartViews = (props) => {
  let userStatData = [];
  function getUserStatData(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].user_id === +id) {
        userStatData.push(arr[i]);
      }
    }

    return userStatData;
  }
  getUserStatData(users_statistic, props.id);

  const label = userStatData.map((item) => item.date);

  const data = userStatData.map((item) => item.page_views);

  return (
    <div className={styles.chart}>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: "Views diagramm",
              data: data,
              backgroundColor: "#3A80BA",
              borderColor: "#3A80BA",
              borderWidth: 4,
            },
          ],
        }}
        width={200}
        height={45}
      />
    </div>
  );
};

export default UserChartViews;
