from winotify import Notification
from .checker import check_if_notification_pending, get_data_to_notification
import time

def send_notifications():
    notifications = get_data_to_notification()

    for index, row in enumerate(notifications, start=1):
        _id, lotto_count, lotto_numbers, plus_count, plus_numbers = row

        if lotto_count == 6 or plus_count == 6:
            message = "Trafiłeś główną wygraną, gratulacje! 🎉"
        else:
            message = f"Lotto (ile trafiłeś): {lotto_count}"
            if lotto_numbers:
                message += f" , trafione liczby: {lotto_numbers}"
            
            message += f"\nLotto z plusem (ile trafiłeś): {plus_count}"
            if plus_numbers:
                message += f" , trafione liczby: {plus_numbers}"

        toast = Notification(
            app_id="Lotto Notifier",
            title=f"Nowy wynik z {index} kuponu",
            msg=message
        )
        toast.show()
        time.sleep(0.5)  

if check_if_notification_pending():
    send_notifications()
