# Responsive coming soon page template

A responsive coming soon web page template made with Boostrap 4.
It can also store subcription email IDs in your Firebase cloud firestore.

[Demo](https://aftaab99.github.io/Coming-Soon-Template/)

## Setting up with your own Firebase project

Copy your firebase API credentails and replace the dumpy variable in firebase_configuration.js with your project credentials.

They can be found under Project overview -> web.
![api configurations](https://github.com/Aftaab99/Coming-Soon-Template/blob/master/img/api_configuration.png)

Next create a cloud firestore for your project. This can done through the firebase console(Database -> Cloud Firestore).
Next create a collection called 'Emails'.

![setting up firestore](https://github.com/Aftaab99/Coming-Soon-Template/blob/master/img/setting_firestore1.png)
![setting up firestore](https://github.com/Aftaab99/Coming-Soon-Template/blob/master/img/setting_firestore2.png)

## Changing date

Currently the countdown timer counts to 30 days since the page was loaded. It can be easily made to count to another date by making a few modifications in 'countdown.js'

Replace

    countDownDate.setDate(countDownDate.getDate() + 30);

with

    countDownDate.setDate('January 17, 2019 03:24:00');