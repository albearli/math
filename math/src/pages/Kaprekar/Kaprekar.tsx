import React from "react";
import KaprekarInput from "./KaprekarInput";
import Link from "../../components/Link";

export default function Kaprekar(): React.ReactElement {
  return (
    <div>
      <h1 className="text-center">Kaprekar's Constant</h1>
      <div className="px-10 pt-5">
        <p>
          The number <strong>6174</strong> is named after the Indian
          mathematician{" "}
          <Link href="https://en.wikipedia.org/wiki/D._R._Kaprekar">
            Kaprekar
          </Link>
          . It is known for the following rule:
        </p>
        <br />
        <div className="ml-10">
          <ol className="list-decimal">
            <li>
              Take any four-digit number, using at least two different digits
              (leading zeros are allowed)
            </li>
            <li>
              Arrange the digits in descending and then in ascending order to
              get two four-digit numbers, adding leading zeros if necessary
            </li>
            <li>Subtract the smaller number from the bigger number</li>
            <li>Go back to step 2 and repeat</li>
          </ol>
        </div>
      </div>
      <br />
      <p className="text-center">
        This process will always reach its fixed point (6174) in at most 7
        iterations.
      </p>
      <br />
      <KaprekarInput />
    </div>
  );
}
