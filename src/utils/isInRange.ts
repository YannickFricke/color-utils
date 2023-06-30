/**
 * Checks if the given `value` is >= `minValue` and <= `maxValue`
 *
 * @param {number} value - The value which should be checked
 * @param {number} minValue - The allowed minimal value
 * @param {number} maxValue - The allowed maximal value
 * @returns {boolean} Returns true when the value is >= minValue and <= maxValue
 */
export function isInRange(
    value: number,
    minValue: number,
    maxValue: number
): boolean {
    if (value < minValue) {
        return false;
    }

    if (value > maxValue) {
        return false;
    }

    return true;
}
