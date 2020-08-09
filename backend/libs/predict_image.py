import os
import numpy as np
import tensorflow.keras.preprocessing.image as tf_image
import requests
import json

classes = {
    0: "cat",
    1: "dog"
}

TENSORFLOW_SERVING_URL = "http://localhost:8501/v1/models/mobilenet:predict"

def convert_image_to_array(image_path):
    image = tf_image.load_img(image_path, target_size=(128, 128))
    image_array = np.array([tf_image.img_to_array(image)/255.0])
    return image_array

def request_model(image_array):
    data = json.dumps({
        "signature": "serving_default",
        "instances": image_array.tolist()
    })

    json_reponse = requests.post(
        url=TENSORFLOW_SERVING_URL,
        data=data,
        headers={"Content-Type": "application/json"}
    )

    predictions = json.loads(json_reponse.text)["predictions"]
    class_predicted_value = round(predictions[0][0])
    class_predicted_name = classes.get(class_predicted_value)
    return class_predicted_name
