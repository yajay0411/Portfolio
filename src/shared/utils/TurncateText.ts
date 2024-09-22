import { useState } from 'react';

/**
 * Custom hook to manage truncation and toggling of text.
 * 
 * @param text The full text that needs to be truncated.
 * @param maxLength The maximum number of characters allowed before truncating.
 * @returns An object containing the displayed text, the toggle button label, and a toggle function.
 */
export const useTruncateText = (text: string, maxLength: number) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncation = () => {
        setIsTruncated(!isTruncated);
    };

    // If the text length exceeds the maximum length and should be truncated
    const truncatedText = isTruncated && text.length > maxLength
        ? text.slice(0, maxLength) + '...'
        : text;

    const toggleLabel = isTruncated ? 'Show more' : 'Show less';

    return {
        text: truncatedText,
        toggleLabel,
        toggleTruncation
    };
};
