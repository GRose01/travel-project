from app import app
from controllers import trips, categories, auth, flight_routes

app.register_blueprint(trips.api, url_prefix='/api')
app.register_blueprint(categories.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(flight_routes.api, url_prefix='/api')
