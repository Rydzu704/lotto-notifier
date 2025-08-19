import time
from backend_py import notifier
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), "backend_py"))

from backend_py import notifier

def main():
    while True:
        try:
            notifier.send_notifications()
        except Exception as e:
            print(f"Error in sending notification: {e}")
        
        time.sleep(15)

if __name__ == "__main__":
    main()
