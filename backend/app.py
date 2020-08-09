from flask import Flask
from flask_restful import Api

from resources.upload_image import UploadImage


def create_app():
    app = Flask(__name__)
    api = Api(app)

    api.add_resource(UploadImage, "/")
    
    return app
