import { Route, Routes } from "react-router-dom";
import { routesPaths } from ".";

const Routeses = () => {
  return (
    <Routes>
      {routesPaths?.map((item, i) => (
        <Route key={i} path={item?.path} element={item?.component} />
      ))}
    </Routes>
  );
};

export default Routeses;
