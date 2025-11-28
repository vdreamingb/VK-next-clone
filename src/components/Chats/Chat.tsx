import MessagesDisplay from "./MessagesDisplay";
import SendForm from "./SendForm";

export default function Chat() {
    return <div className="min-h-[70vh] max-h-[70vh] w-full flex flex-col justify-between">
        <MessagesDisplay />
        <SendForm />
    </div>
}