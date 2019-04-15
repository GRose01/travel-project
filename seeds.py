from app import app, db
from models.user import UserSchema
from models.trip import Trip
from models.category import Category
from models.budget import Budget
from models.duration import Duration

user_schema = UserSchema()

# Creating users
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

    gaby, errors = user_schema.load({
        "username":"gaby",
    	"email":"gaby@email.com",
    	"password":"password",
    	"password_confirmation":"password"
    })

    if errors:
        raise Exception(errors)

    db.session.add(gaby)

    miles, errors = user_schema.load({
        "username":"miles",
    	"email":"miles@email.com",
    	"password":"password",
    	"password_confirmation":"password"
    })

    if errors:
        raise Exception(errors)

    db.session.add(miles)

    bear, errors = user_schema.load({
        "username":"beargrylls",
    	"email":"bear@grylls.com",
    	"password":"password",
    	"password_confirmation":"password"
    })

    if errors:
        raise Exception(errors)

    db.session.add(bear)

    ray, errors = user_schema.load({
        "username":"raymears",
    	"email":"ray@mears.com",
    	"password":"password",
    	"password_confirmation":"password"
    })

    if errors:
        raise Exception(errors)

    db.session.add(ray)

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

# CREATING BUDGETS

    budget1 = Budget(cost='less than £150')
    budget2 = Budget(cost='£150 to £250')
    budget3 = Budget(cost='£250 to £500')
    budget4 = Budget(cost='£500 to £750')
    budget5 = Budget(cost='£750 to £1000')
    budget6 = Budget(cost='£1000 to £1500')
    budget7 = Budget(cost='£1500 to £2000')
    budget8 = Budget(cost='£2000 to £2500')
    budget9 = Budget(cost='£2500 to £3000')
    budget10 = Budget(cost='£3000 to £3500')
    budget11 = Budget(cost='£3500 to £4000')
    budget12 = Budget(cost='£4000 to £5000')
    budget13 = Budget(cost='£5000 to £6000')
    budget14 = Budget(cost='£6000 to £7000')
    budget15 = Budget(cost='£7000+')

    db.session.add(budget1)
    db.session.add(budget2)
    db.session.add(budget3)
    db.session.add(budget4)
    db.session.add(budget5)
    db.session.add(budget6)
    db.session.add(budget7)
    db.session.add(budget8)
    db.session.add(budget9)
    db.session.add(budget11)
    db.session.add(budget12)
    db.session.add(budget13)
    db.session.add(budget14)
    db.session.add(budget15)

# CREATING DurationSchema

    duration1 = Duration(duration='1 to 3 days')
    duration2 = Duration(duration='4 to 7 days')
    duration3 = Duration(duration='7 to 10 days')
    duration4 = Duration(duration='2 weeks')
    duration5 = Duration(duration='3 weeks')
    duration6 = Duration(duration='1 month')
    duration7 = Duration(duration='6 weeks')
    duration8 = Duration(duration='2 months or longer')


    db.session.add(duration1)
    db.session.add(duration2)
    db.session.add(duration3)
    db.session.add(duration4)
    db.session.add(duration5)
    db.session.add(duration6)
    db.session.add(duration7)
    db.session.add(duration8)

# create trips
    madrid = Trip(name='Madrid', images='https://www.mhapartments.com/assets/img/city/casino-tour-madrid-41.jpg', description='The city that knows how to live: Spain’s capital city is very alive and has indeed a very friendly neighbourhood feel', budget=budget5, duration=duration2, categories=[], creator=miles, liked_by=[ben])

    nepal = Trip(name='Annapurna Trek', images='https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/Intrepid-Travel-nepal_annapurna_himalaya_pax-hiking.jpg', description='Trekking in the Himalayas, eating dahl and searching for snow leopards', budget=budget9, duration=duration6, categories=[cat3, cat4, cat42, cat32], creator=gaby, liked_by=[ben, miles, gaby])

    iceland = Trip(name='Iceland Tour', images='https://www.azamaraclubcruises.co.uk/sites/default/files/heros/pr-6-aug-2020-akureyri-iceland.jpg', description='Seeing northern lights and all the sights!', budget=budget7, duration=duration2, categories=[cat27, cat33, cat37], creator=ray, liked_by=[miles, ray])

    sapporo = Trip(name='Sapporo Snow Festival', images='https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_789020407.jpg', description='One of the of the largest and most distinctive winter events in the world.', budget=budget7, duration=duration3, categories=[cat20, cat38, cat49], creator=bear, liked_by=[ben, ray, bear])

    brisbane = Trip(name='Brisbane', images='http://www.choosebrisbane.com.au/~/media/choose/convention-bureau/city-shots/brisbanecityskyline_20180509_wide.ashx', description='Many activities to try out with your family in the sun', budget=budget5, duration=duration2, categories=[cat5, cat19, cat23, cat10], creator=ben, liked_by=[bear, ray])

    foshan = Trip(name='Foshan', images='http://en.foshannews.net/Living/201702/W020170207597115875590.png', description='Foshan isn\'t just an industrial city: there is culture too!', budget=budget2, duration=duration1, categories=[cat10, cat8, cat13], creator=miles, liked_by=[gaby])

    hochiminh = Trip(name='Ho Chi Minh City', images='https://metro.co.uk/wp-content/uploads/2018/02/509551992.jpg?quality=90&strip=all', description='Vietnam at its most dizzying: a high-octane city of commerce and culture pulsating energy', budget=budget5, duration=duration4, categories=[cat4, cat13, cat21, cat42], creator=gaby, liked_by=[bear, miles])

    bangalore = Trip(name='Bangalore Yoga Retreat', images='http://yogaelixir1.bookible.com/wp-content/uploads/sites/305/2017/10/1-Shreyas-resort-wide-view.jpg', description='Channel your inner zen and develop your yoga', budget=budget8, duration=duration7, categories=[cat3, cat13, cat24, cat29, cat46, cat50], creator=miles, liked_by=[miles, ray, gaby])

    croatia = Trip(name='Sail Croatia', images='http://www.traveller.com.au/content/dam/images/1/1/g/h/j/v/image.related.articleLeadwide.620x349.grg7vj.png/1473832124431.jpg', description='Live on the Adriatic sea and explore the coast from the sea', budget=budget12, duration=duration8, categories=[cat3, cat12, cat15, cat21, cat29, cat30, cat35], creator=bear, liked_by=[ben])

    benidorm = Trip(name='Benidorm', images='https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17019.jpg', description='Sun, sex and suspicious looking people', budget=budget4, duration=duration2, categories=[cat5, cat22, cat36, cat6, cat23], creator=ray, liked_by=[ben, miles])

    dubai = Trip(name='Dubai', images='https://images1.bovpg.net/st/back/uk//natural/e69297185f7f43508a96f9be6c0cc4fa5dac5835.jpg', description='Dubai ranks third in the world for number of skyscrapers ', budget=budget6, duration=duration3, categories=[cat2, cat5, cat11, cat13, cat27, cat40], creator=gaby, liked_by=[gaby, ray])


# addings TRIP seeds only
    db.session.add(madrid)
    db.session.add(nepal)
    db.session.add(iceland)
    db.session.add(sapporo)
    db.session.add(brisbane)
    db.session.add(foshan)
    db.session.add(hochiminh)
    db.session.add(bangalore)
    db.session.add(croatia)
    db.session.add(benidorm)
    db.session.add(dubai)

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
    db.session.add(cat10)
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
    db.session.add(cat49)
    db.session.add(cat50)


    db.session.commit()
