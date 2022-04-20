import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Step, Layout, Result, Header } from "./pages";
import "./App.css";

export const App = () => {
  const stepArray = useSelector((state) => state.steps);

  return (
    <div className="app">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Layout />} />
        {stepArray.map((el) => (
          <Route
            key={el.id}
            path={el.path}
            element={<Step way={el.way} step={el.step} type={el.type} />}
          />
        ))}
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};
