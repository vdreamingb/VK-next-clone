import type { INotification } from "@/shared/types/notification.type"
import { parseDate } from "@/utils/date.utils"

interface Props{
    notification: INotification
}

export default function NotificationItem({notification}:Props){
    return <li className="not-last:mb-5">
        <h4 className="text-lg">{notification.text}</h4>
        <p className="text-gray-400">{parseDate(notification.date)}</p>
    </li>
}