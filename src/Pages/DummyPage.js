import { useState, lazy, Suspense } from "react";
const DummyComponent = lazy(() => import("../Components/DummyComponent"));
const DummyPage = () => {
  const [displayComponent, setDisplayComponent] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplayComponent(true)}>Load</button>
      <Suspense fallback={<h2>Loading</h2>}>
        {displayComponent && <DummyComponent />}
      </Suspense>
    </div>
  );
};

export default DummyPage;
