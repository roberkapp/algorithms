export function messageValidator(message: string, validator: string) : boolean{
    const words = message.split(' ');
    if(words.length !== validator.length) return false;
    
    return words.every((word, index) => word.at(0)?.toLowerCase() === validator.at(index)?.toLowerCase());
}