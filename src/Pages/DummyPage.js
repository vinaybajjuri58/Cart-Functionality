import { useState, lazy } from "react";
const DummyComponent = lazy(() => import("../Components/DummyComponent"));
const DummyPage = () => {
  const [displayComponent, setDisplayComponent] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplayComponent(true)}>Load</button>
      {displayComponent && <DummyComponent />}
    </div>
  );
};

export default DummyPage;
