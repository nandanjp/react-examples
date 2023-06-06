export default function reduceStringList(list: string[])
{
    return list.reduce((prev: string, next: string) => `${prev}, ${next}`);
}