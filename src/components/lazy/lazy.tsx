import React, { Suspense, lazy, useState } from "react";

const RenderedComponent = lazy(() =>
  delayToShowLoading(import("./rendercomponent"))
);

const Lazy: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  return (
    <div>
      <h2>Lazy Component</h2>
      <button onClick={() => setIsRendered(true)}>Show Component</button>
      <br />
      {isRendered && (
        <Suspense fallback={<span>Loading....</span>}>
          <RenderedComponent />
        </Suspense>
      )}
    </div>
  );
};

export default Lazy;

const delayToShowLoading = (promise: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};
