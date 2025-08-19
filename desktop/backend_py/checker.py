from . import config
import mysql.connector

def connect_to_db():
    mydb = mysql.connector.connect(
    host=config.DB_HOST,
    user= config.DB_USER,
    password= config.DB_PASS,
    database=config.DB_NAME,
    )
    return mydb

db = connect_to_db()

def check_if_notification_pending():
    mycursor = db.cursor()

    mycursor.execute("SELECT id FROM `notifications` WHERE `is_notification_pending`;")

    result = mycursor.fetchall()
    
    return len(result) > 0
    
def get_data_to_notification():
    mycursor = db.cursor()
    
    mycursor.execute("SELECT `id` ,`lotto_hits_count`,`lotto_hits_numbers`,`lotto_plus_hits_count`,`lotto_plus_hits_numbers`" \
    "FROM `notifications` WHERE `is_notification_pending`;")
    
    result = mycursor.fetchall()
    index = 0
    for x in result:
        
        #print(result[index][0])
        id_index = result[index][0]
        index = index + 1
        mycursor.execute("UPDATE `notifications` SET `is_notification_pending` = 0 WHERE id = %s", (id_index,))
    db.commit()
    return result
