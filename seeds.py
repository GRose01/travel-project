from app import app, db

from models import Trip

with app.app_context():
    db.drop_all()
    db.crete_all()

# create trips
madrid = Trip(name='Madrid', images='url_here', description='The city that knows how to live: Spain’s capital city is very alive and has indeed a very friendly neighbourhood feel', budget=2000, number_of_days=5, time_of_year='September', categories=[])


# adding and commiting to the session

db.session.add(madrid)

db.session.commit()
