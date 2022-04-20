import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Result.module.scss";

export const Result = () => {
  const navigate = useNavigate();
  const result = useSelector((state) => state);

  const [data, setData] = useState(result.step);

  const getSteps = () => {
    setData(result.step);
    return console.log(data);
  };

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultHeader}>
        Result
        {
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Email:</span> {data.email}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Password:</span>{" "}
              {data.password}
            </p>
          </div>
        }
      </div>
      <button onClick={getSteps} className={styles.getResult}>
        Получить результат!
      </button>
      <button onClick={() => navigate(-1)} className={styles.backResult}>
        Назад
      </button>
    </div>
  );
};
