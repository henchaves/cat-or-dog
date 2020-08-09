from flask import Flask, render_template, make_response
from flask_restful import Resource, reqparse
import werkzeug

from datetime import datetime
import os

class UploadImage(Resource):
    parse = reqparse.RequestParser()
    parse.add_argument("file", type=werkzeug.datastructures.FileStorage, location="files")
    headers = {"Content-Type": "text/html"}

    @classmethod
    def post(cls):
        files = cls.parse.parse_args()
        image = files["file"]
        if "image" in image.content_type:
            time_str = datetime.now().strftime("%Y%m%d%H%M%S")
            image_name = f"{time_str}-{image.filename}"
            image.save(os.path.join("uploads", image_name))
            return make_response(render_template("index.html", message="Success"), 200, cls.headers)
        return make_response(render_template("index.html", message="Error: Uploaded file is not an image"), 400, cls.headers)
    
    @classmethod
    def get(cls):
        return make_response(render_template("index.html", message="Upload an image"), 200, cls.headers)
