from flask import Flask, render_template, request
from datetime import datetime
import os


def create_app():
    app = Flask(__name__)

    @app.route("/", methods=["GET", "POST"])
    def hello():
        if request.method == "POST":
            file = request.files["file"]
            name_to_save = datetime.now().strftime("%Y%m%d%H%M%S") + file.filename
            file.save(os.path.join("uploads", name_to_save))
            return render_template("index.html", message="success")
        return render_template("index.html", message="Upload")
    #More info: https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/
    #https://stackoverflow.com/questions/28982974/flask-restful-upload-image
    return app
