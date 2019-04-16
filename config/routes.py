import os
from app import app

from controllers import trips, auth, categories, destinations, flight_routes, budgets, durations

app.register_blueprint(trips.api, url_prefix='/api')
app.register_blueprint(categories.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(categories.api, url_prefix='/api')
app.register_blueprint(destinations.api, url_prefix='/api')
app.register_blueprint(flight_routes.api, url_prefix='/api')
app.register_blueprint(budgets.api, url_prefix='/api')
app.register_blueprint(durations.api, url_prefix='/api')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):

    if os.path.isfile('dist/' + path):
        return app.send_static_file(path)

    return app.send_static_file('index.html')
