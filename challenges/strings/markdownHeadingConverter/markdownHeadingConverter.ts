export function headingConverter(heading: string) : string {
    const [,hashtags, header] = heading.match(/^\s*(#{1,6})\s(.+)$/) || [];
    if(!hashtags || !header) return  'Invalid format';
    return `<h${hashtags.length}>${header.trim()}</h${hashtags.length}>`;
}