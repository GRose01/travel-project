from app import app, db
from models.user import UserSchema
from models.trip import Trip

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    ben, errors = user_schema.load({
        "username":"benfogle",
    	"email":"ben@fogle.com",
    	"password":"password",
    	"password_confirmation":"password"
    })

    if errors:
        raise Exception(errors)

    db.session.add(ben)

# create trips
    madrid = Trip(name='Madrid', images='url_here', description='The city that knows how to live: Spain’s capital city is very alive and has indeed a very friendly neighbourhood feel', budget=2000, number_of_days=5, time_of_year='September', categories=[])

    nepal = Trip(name='Annapurna Trek', images='url_here', description='Trekking in the Himalayas, eating dahl and searching for snow leopards', budget=2500, number_of_days=30, time_of_year='April', categories=[])

    iceland = Trip(name='Iceland Tour', images='url_here', description='Seeing northern lights and all the sights!', budget=1500, number_of_days=4, time_of_year='January', categories=[])


# adding and commiting to the session

    db.session.add(madrid)
    db.session.add(nepal)
    db.session.add(iceland)

    db.session.commit()
