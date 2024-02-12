import React, { useEffect, useState } from "react";

import HomePage from "./Component/HomePage";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="Loader">
      {loading ? (
        // Display the preloader while loading is true
        <div
          className="flex items-center justify-center h-screen flex-col"
          id="preloaderdiv"
        >
          <img
            src="src/assets/newgif.gif"
            alt=""
            className="w-[156px]"
          />
          <h2 className="text-[28px] font-mooli font-medium">BarkBuddy</h2>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
