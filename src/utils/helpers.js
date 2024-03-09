export function formatDate (isoDate, type) {
    const shortOption = { month: 'short', day: 'numeric' };
    const longOption = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', type === 'short' ? shortOption : longOption);
}
