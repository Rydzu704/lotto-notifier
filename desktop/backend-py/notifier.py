from winotify import Notification
from checker import check_if_notification_pending, get_data_to_notification

def send_notifications():
    notifications = get_data_to_notification()
    message_lines = []

    for row in notifications:
        _id, lotto_count, lotto_numbers, plus_count, plus_numbers = row
        if row[1] == 6 or row[3] == 6:
            message = "Trafiles glowna wygrana, gratulacje!"
        else:
            line = f"Lotto: {lotto_count} {'trafione liczby: ' + lotto_numbers if lotto_numbers else ''}"
            line += f"Lotto z plusem: {plus_count} {'trafione liczby: ' + plus_numbers if plus_numbers else ''}"
            
            message_lines.append(line)

            message = "\n".join(message_lines)
    toast = Notification(app_id="Lotto Notifier", title="Nowe wyniki", msg=message) 
    toast.show()
    
if check_if_notification_pending():
    send_notifications()