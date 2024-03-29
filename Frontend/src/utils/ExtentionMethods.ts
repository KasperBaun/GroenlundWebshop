export class ExtentionMethods {

    public static safeSlice<T>(arr: T[], start: number, end?: number): T[] {
        const maxLength = arr.length;
        const safeStart = Math.min(start, maxLength);
        const safeEnd = end !== undefined ? Math.min(end, maxLength) : maxLength;
        return [...arr.slice(safeStart, safeEnd)];
    }

    public static formatPrice(price: number, locale?: string, currency?: string): string {
        return price.toLocaleString(locale, { style: "currency", currency: currency });
    }
}