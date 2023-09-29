

// caching 
// redis => databsee -nosql , caching technolgie ,  brokker messageies


//  redis commands 

/* 
redisni ishavotganini tekwrish uchun command => ping , atvet qaytishi kere pong 


1. SET key value: Устанавливает значение ключа.

2. GET key: Возвращает значение ключа.

3. DEL key: Удаляет ключ и связанное с ним значение.

4. INCR key: Увеличивает значение ключа на 1.

5. DECR key: Уменьшает значение ключа на 1.

6. HSET key field value: Устанавливает значение поля внутри хэша, связанного с ключом.

7. HGET key field: Возвращает значение поля из хэша, связанного с ключом.

8. LPUSH key value1 [value2 ...]: Добавляет одно или несколько значений в начало списка, связанного с ключом.

9. RPUSH key value1 [value2 ...]: Добавляет одно или несколько значений в конец списка, связанного с ключом.

10. LPOP key: Удаляет и возвращает первый элемент списка, связанного с ключом.

11. RPOP key: Удаляет и возвращает последний элемент списка, связанного с ключом.

12. SADD key member1 [member2 ...]: Добавляет одного или несколько элементов в множество, связанное с ключом.

13. SMEMBERS key: Возвращает все элементы множества, связанного с ключом.

14. ZADD key score1 member1 [score2 member2 ...]: Добавляет одного или несколько элементов в сортированное множество, связанное с ключом.

15. ZRANGE key start stop [WITHSCORES]: Возвращает элементы из сортированного множества, связанного с ключом, в указанном диапазоне.

16. EXPIRE key seconds: Устанавливает время жизни ключа в секундах.

17. PUBLISH channel message: Публикует сообщение в указанный канал.

18. SUBSCRIBE channel [channel2 ...]: Начинает прослушивание указанных каналов.

19. SCAN cursor [MATCH pattern] [COUNT count]: Используется для сканирования и навигации по ключам.

20. MULTI и EXEC: Используются для выполнения нескольких команд как одной транзакции.

21. FLUSHALL и FLUSHDB: Очищают все данные (сбрасывают базу данных) или только указанную базу данных.




*/


/* 

cachelash uchun bogan commandlar

0. clear 
descr : terminali tozalidi 

1.  set key value + enter 
output:  ok 
descr: xotirage value saqlaydi 


2. get key 
output: 'keyning valuesi' ok chqadi agar key bosa bomasa nil
descr: xotiradegi valueni chqaradi 


3. setex key seconds value 
output: ok 
descr: vaqtincha xotiraga malumotni sqlaydi 



4.ttl key 
output: second chiqadi malumot ohcib ketshga qolgan vaqtni korsatdi   
descr:  vaqtincha xotiraga saqlangan malumotni ochishiga qancha vaqt qogan bosa korstadi 


5.flushall
output: ok  
descr: hamma malumotlani ochiradi


6.hset  key field value --> hset users name eshmat 
output : 1  manosi bita qiymat qoshldi dgani 
descr : objectga yoki arrayga bita key bilan value sqlagandaka 


7.hget key field 
output: "value" chqadi
descr : obj yo arr kornshda sqlangan malumotdan olib chqaradi valuni hudi obj.name qb chaqrgandaqa


8.7.hgetall key field 
output: "key va "value" chqadi
descr : obj yo arr kornshda sqlangan valulelani hammasni chqaradi 


9.del key 
output :  1
descr :  berilgan key ostidagi obj listni  ochiradi bittasni flushall esa hammasni ochirardi 


10. hdel key field 
output : 1 chqadi manosi obj ichidan bit akey value ochrldi dgani 
descr :  bu deldan farqi del obj ozini ochirsa bu obj ichidan key value ochradi flush all esa toliq db tozalidi 


11. rpush key value  = rpush fruits banan
output: value index masalan 3 
descr:  bu huddi arrayga ohridan element push qladgan methdaka ishlid 


12. lrange key start stop 
output  lrange fruits 0 -1
1) "olma"
2) "anor"
3) "banan"
4) "uzum"
descr : list ichidan malumotlani oberadi keyga list nomi va qaysi indexdan boshlab qasysi indexgacha oberwini yozladi


13.lpush key value - lpush fruits anjir
output: index value 
descr: listga valueni boshidan qoshib qoyadi va indexi 1 bolb qoshladi 


*/