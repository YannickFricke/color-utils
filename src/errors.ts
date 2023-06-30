/**
 * An error which is thrown at several occasions like invalid inputs or out-of-range numbers for parsed values.
 * @extends Error
 */
export class InvalidValueError extends Error {
    constructor(value: string) {
        super(`Found invalid value: ${value}`);
    }
}
