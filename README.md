## Hunger Captain
```
This is an online food menu service of a restaurant. These days, when you visit a restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select items. So we created the menu app where you can see food images with the needed information and select your items easily. During such unprecedented time and social distancing, online menu card technology is a boon!
```
**This App uses a Replit free plan, so I am afraid that it takes time to load the pages.**
Check out [FRONTEND LIVE DEMO](https://hunger-cap-frontend.taliadiaz.repl.co) here!!
Check out [API LIVE DEMO](https://HUunger-cap-backend.taliadiaz.repl.co) here!!
![Screen Shot 2023-01-09 at 10 34 53 PM](https://user-images.githubusercontent.com/108022651/211456265-30a4da54-751d-4e91-8f96-9d178c7a97af.png)

## Tech used
```
* Frontend : React & Redux
* Backend : Django
```
## How to Install
1. Git Clone 
```
2. Backend setting
```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/
# To have dummy data for testing run:
python manage.py fixtures/dummy-data.json
```
3. Frontend setting
```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
