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

# create trips
    madrid = Trip(name='Madrid', images=['https://www.mhapartments.com/assets/img/city/casino-tour-madrid-41.jpg', 'https://lonelyplanetwp.imgix.net/2018/07/500pxRF_56377532-1de3d57611d4.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748', 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9d06864e1a551111cd5115d0310489a8-madrid.jpg?sharp=10&vib=20&w=1200', 'https://www.connections.be/~/media/images/connections/vliegtickets/europa/madrid/madridfountain.jpg'], description='The city that knows how to live: Spain’s capital city is very alive and has indeed a very friendly neighbourhood feel', budget='budget5', number_of_days=duration2, time_of_year='September', categories=[], creator=users[getRandom(5)].id, liked_by=[ben])

    nepal = Trip(name='Annapurna Trek', images=['https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/Intrepid-Travel-nepal_annapurna_himalaya_pax-hiking.jpg', 'https://www.aanitravel.com/wp-content/uploads/2019/02/tilicho.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpS94j49bsvHk-dSDwFjpXyOFeo7PnaME79F_EpH2XZZJaBMxb', 'https://cimages1.touristlink.com/data/cache/I/B/E/T/A/N/F/L/ibetan-flags-at-annapurna-base-camp-4200m_640_480.jpg'], description='Trekking in the Himalayas, eating dahl and searching for snow leopards', budget=budget9, number_of_days=duration6, time_of_year='April', categories=[cat3, cat4, cat42, cat32], creator=users[getRandom(5)].id, liked_by=[ben, miles, gaby])

    iceland = Trip(name='Iceland Tour', images=['https://www.azamaraclubcruises.co.uk/sites/default/files/heros/pr-6-aug-2020-akureyri-iceland.jpg', 'http://www.ncl.com/sites/default/files/full-norway-fjords.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7P_wIFwjDmQfKr7GU-CwV2Gg9Tp-RVoxlfZ3J9GOLHi7LT4w-A', 'https://travelbooksfood.com/wp-content/uploads/2018/06/Iceland_Roadtrip_itierary_church_mountain.jpg'], description='Seeing northern lights and all the sights!', budget=budget7, number_of_days=duration2, time_of_year='January', categories=[cat27, cat33, cat37], creator=users[getRandom(5)].id, liked_by=[miles, ray])

    sapporo = Trip(name='Sapporo Snow Festival', images=['https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_789020407.jpg', 'https://i1.wp.com/skilasjapan.com/wp-content/uploads/2015/09/sapporo_winter.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1voFCrdiYi7x5VUbJrAeJylSCUNhun3PPO0iOyVvOuzmlEl3MwA', 'https://images.japan-experience.com/guide-japon/1810/s380x280/sapporo_niseko.jpg'], description='One of the of the largest and most distinctive winter events in the world.', budget=budget7, number_of_days=duration3, time_of_year='January', categories=[cat20, cat38, cat49], creator=users[getRandom(5)].id, liked_by=[ben, ray, bear])

    brisbane = Trip(name='Brisbane', images=['http://www.choosebrisbane.com.au/~/media/choose/convention-bureau/city-shots/brisbanecityskyline_20180509_wide.ashx', 'http://www.choosebrisbane.com.au/~/media/choose/convention-bureau/city-shots/brisbanesignsunshine_20170904_wide.ashx', 'https://cdn.newsapi.com.au/image/v1/ce3b09ef0b39a0cfd775025941467507?width=1024', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufVucA0-Y1-oENGOtwcL23ouZmHvEK_I8j0Hkwhm6_C0roKlKaA'], description='Many activities to try out with your family in the sun', budget=budget5, number_of_days=duration2, time_of_year='February', categories=[cat5, cat19, cat23, cat10], creator=users[getRandom(5)].id, liked_by=[bear, ray])

    foshan = Trip(name='Foshan', images=['http://en.foshannews.net/Living/201702/W020170207597115875590.png', 'http://www.chinadaily.com.cn/regional/attachement/jpg/site1/20161116/286ed488c825199634be09.jpg', 'http://en.foshannews.net/News/201803/W020180313504413289028.jpg', 'https://cdn2.wanderlust.co.uk/media/2898/articles-china-trip-planner.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131480769560000000'] description='Foshan isn\'t just an industrial city: there is culture too!', budget=budget2, number_of_days=duration1, time_of_year='April', categories=[cat10, cat8, cat13], creator=users[getRandom(5)].id, liked_by=[gaby])

    hochiminh = Trip(name='Ho Chi Minh City', images=['https://metro.co.uk/wp-content/uploads/2018/02/509551992.jpg?quality=90&strip=all', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwg2NtW3Vp-f3SJYkuEmGa-q3yG2P3T5MYWHk0yQskmAukjyLNA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pDCG2VRKBHYRGCUn7CpaUt50diB8BCTisGGq6oXBzcOMt7BdxA', 'https://www.roughguides.com/wp-content/uploads/2012/06/iStock-637659770-840x561.jpg'], description='Vietnam at its most dizzying: a high-octane city of commerce and culture pulsating energy', budget=budget5, number_of_days=duration4, time_of_year='October', categories=[cat4, cat13, cat21, cat42], creator=users[getRandom(5)].id, liked_by=[bear, miles])

    bangalore = Trip(name='Bangalore Yoga Retreat', images=['http://yogaelixir1.bookible.com/wp-content/uploads/sites/305/2017/10/1-Shreyas-resort-wide-view.jpg', 'https://photos.tpn.to/ph/ne/ng/rl/299x225.jpg', 'https://res.cloudinary.com/wandertrails/image/upload/q_auto/c_scale/w_525,h_300,c_fill,fl_progressive/tar02vcjwqehjk4m2zhi', 'https://i1.wp.com/www.menstylefashion.com/wp-content/uploads/2017/06/Shreyas-Retreat-Bangalore-Yoga-Trends-In-India-MenStyleFashion-2017-4.jpg?w=246&h=246&crop=1&ssl=1'], description='Channel your inner zen and develop your yoga', budget=budget8, number_of_days=duration7, time_of_year='Spring', categories=[cat3, cat13, cat24, cat29, cat46, cat50], creator=users[getRandom(5)].id, liked_by=[miles, ray, gaby])

    croatia = Trip(name='Sail Croatia', images=['http://www.traveller.com.au/content/dam/images/1/1/g/h/j/v/image.related.articleLeadwide.620x349.grg7vj.png/1473832124431.jpg', 'https://cdn.traveltalktours.com/wp-content/uploads/2017/01/Sail-Dubrovnik-to-Split-thumb-360x225.jpg', 'https://s3.eu-west-2.amazonaws.com/sc30/uploads/2016/04/croatia-sailing-guide-dubrovnik-at-sunset.jpg', 'https://res.cloudinary.com/zizoo/image/upload/v1530004486/croatia-1595326_1280.jpg'], description='Live on the Adriatic sea and explore the coast from the sea', budget=budget12, number_of_days=duration8, time_of_year='Summer', categories=[cat3, cat12, cat15, cat21, cat29, cat15, cat30, cat35], creator=users[getRandom(5)].id, liked_by=[ben])

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


    db.session.commit()
