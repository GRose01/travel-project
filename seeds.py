from app import app, db
from models.user import UserSchema
from models.trip import Trip
from models.category import Category

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
    madrid = Trip(name='Madrid', images='url_here', description='The city that knows how to live: Spain’s capital city is very alive and has indeed a very friendly neighbourhood feel', budget=2000, number_of_days=5, time_of_year='September', categories=[cat10, cat11, cat26])

    nepal = Trip(name='Annapurna Trek', images='url_here', description='Trekking in the Himalayas, eating dahl and searching for snow leopards', budget=2500, number_of_days=30, time_of_year='April', categories=[cat3, cat4, cat42, cat32])

    iceland = Trip(name='Iceland Tour', images='url_here', description='Seeing northern lights and all the sights!', budget=1500, number_of_days=4, time_of_year='January', categories=[cat27, cat33, cat37])

# addings TRIP seeds only
    db.session.add(madrid)
    db.session.add(nepal)
    db.session.add(iceland)

#creating categories
    cat1 = Category(name='Accessible')
    cat2 = Category(name='Activity')
    cat3 = Category(name='Adventure')
    cat4 = Category(name='Backpacking')
    cat5 = Category(name='Beach')
    cat6 = Category(name='Boys Trip')
    cat7 = Category(name='Budget')
    cat8 = Category(name='Business')
    cat9 = Category(name='Camping')
    cat10 = Category(name='City Break')
    cat11 = Category(name='Couples')
    cat12 = Category(name='Cruise')
    cat13 = Category(name='Culture')
    cat14 = Category(name='Diving')
    cat15 = Category(name='Eco-Tourism')
    cat16 = Category(name='Educational')
    cat17 = Category(name='Exotic')
    cat18 = Category(name='Extreme')
    cat19 = Category(name='Family')
    cat20 = Category(name='Festival')
    cat21 = Category(name='Food')
    cat22 = Category(name='Girls Trip')
    cat23 = Category(name='Group')
    cat24 = Category(name='Health')
    cat25 = Category(name='Honeymoon')
    cat26 = Category(name='Last Minute')
    cat27 = Category(name='Luxury')
    cat28 = Category(name='Rail / Train')
    cat29 = Category(name='Relaxation')
    cat30 = Category(name='Remote')
    cat31 = Category(name='Retirement')
    cat32 = Category(name='Road Trip')
    cat33 = Category(name='Romantic')
    cat34 = Category(name='Safari')
    cat35 = Category(name='Sailing')
    cat36 = Category(name='Self Catering')
    cat37 = Category(name='Short Break')
    cat38 = Category(name='Ski / Snowboard')
    cat39 = Category(name='Spa')
    cat40 = Category(name='Special Interest')
    cat41 = Category(name='Tours')
    cat42 = Category(name='Trekking')
    cat43 = Category(name='Villa')
    cat44 = Category(name='Volunteer')
    cat45 = Category(name='Walking')
    cat46 = Category(name='Wellness')
    cat47 = Category(name='Wilderness')
    cat48 = Category(name='Wildlife')
    cat49 = Category(name='Winter')
    cat50 = Category(name='Yoga')


#adding CATEGORIES seeds ONLY

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)
    db.session.add(cat4)
    db.session.add(cat5)
    db.session.add(cat6)
    db.session.add(cat7)
    db.session.add(cat8)
    db.session.add(cat9)
    db.session.add(cat11)
    db.session.add(cat12)
    db.session.add(cat13)
    db.session.add(cat14)
    db.session.add(cat15)
    db.session.add(cat16)
    db.session.add(cat17)
    db.session.add(cat18)
    db.session.add(cat19)
    db.session.add(cat20)
    db.session.add(cat21)
    db.session.add(cat22)
    db.session.add(cat23)
    db.session.add(cat24)
    db.session.add(cat25)
    db.session.add(cat26)
    db.session.add(cat27)
    db.session.add(cat28)
    db.session.add(cat29)
    db.session.add(cat30)
    db.session.add(cat31)
    db.session.add(cat32)
    db.session.add(cat33)
    db.session.add(cat34)
    db.session.add(cat35)
    db.session.add(cat36)
    db.session.add(cat37)
    db.session.add(cat38)
    db.session.add(cat39)
    db.session.add(cat40)
    db.session.add(cat41)
    db.session.add(cat42)
    db.session.add(cat43)
    db.session.add(cat44)
    db.session.add(cat45)
    db.session.add(cat46)
    db.session.add(cat47)
    db.session.add(cat48)
    db.session.add(cat50)



    db.session.commit()
