from app import app
from controllers import trips, auth

app.register_blueprint(trips.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
