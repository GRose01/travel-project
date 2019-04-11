from flask import Blueprint, jsonify, request
import requests

api = Blueprint('flight_routes', __name__)

@api.route('/flights', methods=['GET'])
def get_flights():
    url = '''http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/'''
    country = request.args.get('')
    currency = request.args.get('')
    locale = request.args.get('')
    originPlace = request.args.get('')
    destinationPlace = request.args.get('')
    outboundPartialDate = request.args.get('')
    inboundPartialDate = request.args.get('')
    payload = {'key': '12345', 'country': country, 'currency': currency, 'locale': locale, 'originPlace': originPlace, 'destinationPlace': destinationPlace, 'outboundPartialDate': outboundPartialDate, 'inboundPartialDate': inboundPartialDate}
    r = requests.get(url, params=payload)
    print(r)
    return '', 200
