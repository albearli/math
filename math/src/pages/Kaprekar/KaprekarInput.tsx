import React, { createRef, useState } from "react";
import calculateKaprekar from "./calculateKaprekar";

export default function KaprekarInput(): React.ReactElement {
  let input = createRef<HTMLInputElement>();
  const [steps, setSteps] = useState([] as any);

  const handleClick = () => {
    const value = parseInt(input.current?.value ?? "");
    if (value == null || isNaN(value)) {
      alert("Please input a valid integer");
      return;
    }
    if (value > 9999) {
      alert("Please input an integer under 9999");
      return;
    }
    if (value % 1111 === 0) {
      alert("Please input a number using at least two different digits");
      return;
    }
    setSteps(calculateKaprekar(value));
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Input a 4 digit number!
          </label>
          <input
            ref={input}
            type="number"
            min="1000"
            max="9999"
            step="1"
            name="price"
            id="price"
            className="ring-indigo-500 border-indigo-500 block pl-2 sm:text-l rounded-md w-20"
            placeholder="1234"
          />
        </div>
        <button
          className="ml-4 p-1 rounded-full border-2 border-indigo-500"
          onClick={handleClick}
        >
          Calculate
        </button>
      </div>
      <div className="text-center">
        {steps != null && steps.length > 0
          ? steps.map((step: string[][]) => {
              return (
                <div key={step[0].join("")} className="p-3">
                  <p className="text-lg">
                    {step[0].join("")} - {step[1].join("")} = {step[2].join("")}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
