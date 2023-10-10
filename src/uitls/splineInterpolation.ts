export type EasingFunction = (t: number) => number;

const easings: { [key: string]: EasingFunction } = {
  /**
   * A linear easing function.
   * @param t - The time value.
   * @returns The eased value.
   */
  linear: (t) => t,
  /**
   * An easing function that starts slow and speeds up.
   * @param t - The time value.
   * @returns The eased value.
   */
  easeInQuad: (t) => t * t,
  /**
   * An easing function that starts fast and slows down.
   * @param t - The time value.
   * @returns The eased value.
   */
  easeOutQuad: (t) => t * (2 - t),
  /**
   * An easing function that starts slow, speeds up, then slows down.
   * @param t - The time value.
   * @returns The eased value.
   */
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};

/**
 * Performs spline interpolation to estimate the value of a function at a given input value.
 * @param inputValue The input value to estimate the function value for.
 * @param domain An array of input values that the function is defined for.
 * @param rangeValues An array of function values corresponding to the input values in the domain array.
 * @param easing The easing function to apply to the normalized progress between the domain values.
 * @returns The estimated function value at the given input value.
 * @throws An error if the domain and rangeValues arrays have different lengths, or if the inputValue is outside the domain range.
 */
export default function splineInterpolation(
  inputValue: number,
  domain: number[],
  rangeValues: number[],
  easing: string = "linear"
): number {
  if (domain.length !== rangeValues.length) {
    throw new Error("Domain and rangeValues must have the same length.");
  }

  if (!easings[easing]) {
    throw new Error(`Easing function '${easing}' is not defined.`);
  }

  if (inputValue <= domain[0]) {
    return rangeValues[0];
  }
  if (inputValue >= domain[domain.length - 1]) {
    return rangeValues[rangeValues.length - 1];
  }

  for (let i = 1; i < domain.length; i++) {
    if (domain[i] >= inputValue) {
      const x1 = domain[i - 1];
      const x2 = domain[i];
      const y1 = rangeValues[i - 1];
      const y2 = rangeValues[i];

      // Calculate the normalized progress t between 0 and 1
      const t = (inputValue - x1) / (x2 - x1);

      // Apply easing function
      const easedT = easings[easing](t);

      return y1 + easedT * (y2 - y1);
    }
  }

  throw new Error("Unexpected input value.");
}
