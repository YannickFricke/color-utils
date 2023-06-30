import { isInRange } from '../isInRange';

describe('isInRange', () => {
    it('should return true when the value is >= minValue and <= maxValue', () => {
        expect(isInRange(0, 0, 1)).toBe(true);

        expect(isInRange(0.5, 0, 1)).toBe(true);

        expect(isInRange(1, 0, 1)).toBe(true);
    });

    it('should return false when the value is < minValue or > maxValue', () => {
        expect(isInRange(-1, 0, 1)).toBe(false);

        expect(isInRange(-10, 0, 1)).toBe(false);

        expect(isInRange(2, 0, 1)).toBe(false);

        expect(isInRange(10, 0, 1)).toBe(false);
    });
});
