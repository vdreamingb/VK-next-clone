export interface ISortedMessage{
    date: string;
    messages: IMessage[]
}

export interface IMessage{
    id: number;
    username: string;
    content: string;
}