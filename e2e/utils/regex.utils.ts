export class RegexUtils {

    static toRegexIgnoreLeadingAndTrailingWhitespace(input: string): RegExp {
        // Escape special characters and then create a regex that ignores leading and trailing whitespace
        const escapedInput = RegexUtils.escapeRegex(input);
        return new RegExp(`^\\s*${escapedInput}\\s*$`, 'i');
    }

    private static escapeRegex(input: string): string {
        return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    
}