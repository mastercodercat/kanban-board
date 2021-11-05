import Loader from "react-loader-spinner";

import "./index.css";

const AppLoader = () => {
  return (
    <div className="load-spinner w-100 d-flex align-items-center justify-content-center">
      <Loader type="TailSpin" color="#0000dd" width={50} height={50} />
    </div>
  );
};

export default AppLoader;
