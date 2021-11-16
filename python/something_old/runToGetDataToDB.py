import requests
import sqlite3

""" CREATE/CONNECT TO TABLES """

con = sqlite3.connect("usersAndPosts.db")
cur = con.cursor()
sql1 = """\
create table if not exists users (
    id INTEGER,
    name TEXT,
    username TEXT,
    email TEXT,
    address TEXT,
    phone TEXT,
    website TEXT,
    company TEXT
);
"""
sql2 = """\
create table if not exists posts (
    userId INTEGER,
    id INTEGER,
    title TEXT,
    body TEXT
);
"""
try: 
    cur.execute(sql1)
except sqlite3.DatabaseError as err:
    print("Ошибка:", err)
else:
    print("Запрос к users успешно выполнен")
    con.commit()
try: 
    cur.execute(sql2)
except sqlite3.DatabaseError as err:
    print("Ошибка:", err)
else:
    print("Запрос к posts успешно выполнен")
    con.commit()
cur.close()
con.close()

""" EXTRACT DATE OF USERS AND POSTS """

users = ('http://jsonplaceholder.typicode.com/users')  
posts = ('http://jsonplaceholder.typicode.com/posts')

def getArrayFrom(urlOfSite):
    jsonArrayEncode = requests.get(urlOfSite)

    if jsonArrayEncode.status_code == 200:
        print('Запрос по адресу ' + urlOfSite + ' успешно выполнен')
    elif jsonArrayEncode.status_code == 404:
        print('Не найдено')

    arrayDecode = jsonArrayEncode.json() 
    result = arr = arrayDecode
    return result

usersArray = getArrayFrom(users)
postsArray = getArrayFrom(posts)

""" ADD DATE OF USERS AND POSTS TO DATA BASE """

for i in range(len(usersArray)):
    print('------------------------------------------')
    userDictionary = dict(usersArray[i])
    print('user id ' + str(i + 1))
    print(userDictionary['name'])
    con = sqlite3.connect("usersAndPosts.db")
    cur = con.cursor()
    sql = """\
    INSERT INTO users (id, name, username, email, phone, website)
    VALUES (:id, :name, :username, :email, :phone, :website)
    """
    try: 
        cur.execute(sql, userDictionary)
    except sqlite3.DatabaseError as err:
        print("Ошибка:", err)
    else:
        print("Запрос №" + str(i + 1) + " к users выполнен")
        con.commit()
    cur.close()
    con.close()
    print('------------------------------------------')

for i in range(len(postsArray)):
    print('------------------------------------------')
    postDictionary = dict(postsArray[i])
    print('post id ' + str(i + 1))
    print(postDictionary['title'])
    con = sqlite3.connect("usersAndPosts.db")
    cur = con.cursor()
    sql = """\
    INSERT INTO posts (userId, id, title, body)
    VALUES (:userId, :id, :title, :body)
    """
    try: 
        cur.execute(sql, postDictionary)
    except sqlite3.DatabaseError as err:
        print("Ошибка:", err)
    else:
        print("Запрос №" + str(i + 1) + " к posts успешно выполнен")
        con.commit()
    cur.close()
    con.close()
    print('------------------------------------------')


print('Data added to data base successfully')
input()