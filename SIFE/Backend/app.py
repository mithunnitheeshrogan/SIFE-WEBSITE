from flask import Flask, request, redirect, render_template, url_for, jsonify
from flask_cors import CORS
import mysql.connector
import os
from werkzeug.utils import secure_filename

app = Flask(__name__, template_folder="D:\\SIFE\\Frontend\\Admin\\templates")
CORS(app)

# ----------------- CONFIG -----------------
UPLOAD_FOLDER = os.path.join('static', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Mithun_2628",
        database="Company"
    )

# ----------------- ROUTES -----------------

@app.route('/')
def index():
    return render_template('index.html')

# ----------------- TESTIMONIALS -----------------

@app.route('/submit_testimonial', methods=['POST'])
def submit_testimonial():
    name = request.form['name']
    review = request.form['review']
    designation = request.form.get('designation')
    image = request.files['image']
    image_path = None

    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = f'static/uploads/{filename}'
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO testimonials (name, review, designation, image_path)
        VALUES (%s, %s, %s, %s)
    """, (name, review, designation, image_path))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('testimonials_form'))

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM testimonials")
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]

        testimonials = []
        for row in rows:
            testimonial = dict(zip(column_names, row))
            if testimonial["image_path"]:
                testimonial["image_path"] = url_for('static', filename=testimonial["image_path"].replace('static/', ''))
                testimonial["image_path"] = request.host_url.rstrip('/') + testimonial["image_path"]
            testimonials.append(testimonial)

        cursor.close()
        conn.close()
        return jsonify(testimonials)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/delete_testimonial/<int:id>', methods=['DELETE'])
def delete_testimonial(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM testimonials WHERE id = %s", (id,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Testimonial deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------- G-ALERT -----------------

@app.route('/submit_galert', methods=['POST'])
def submit_galert():
    product_name = request.form['product_name']
    features = [request.form.get(f'galert_feature{i}') for i in range(1, 4)]
    specs = [request.form.get(f'galert_spec{i}') for i in range(1, 4)]
    uses = [request.form.get(f'galert_use{i}') for i in range(1, 4)]
    image = request.files['image']
    image_path = None

    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = f'static/uploads/{filename}'
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO galert (
            product_name, galert_feature1, galert_feature2, galert_feature3,
            galert_spec1, galert_spec2, galert_spec3,
            galert_use1, galert_use2, galert_use3,
            image_path
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (product_name, *features, *specs, *uses, image_path))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('galert_form'))

@app.route('/api/galert', methods=['GET'])
def get_galert():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM galert")
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]

        galerts = []
        for row in rows:
            item = dict(zip(column_names, row))
            if item["image_path"]:
                item["image_path"] = url_for('static', filename=item["image_path"].replace('static/', ''))
                item["image_path"] = request.host_url.rstrip('/') + item["image_path"]
            galerts.append(item)

        cursor.close()
        conn.close()
        return jsonify(galerts)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/delete_galert/<int:id>', methods=['DELETE'])
def delete_galert(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM galert WHERE id = %s", (id,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "G-alert item deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------- FEAUT -----------------

@app.route('/submit_feaut', methods=['POST'])
def submit_feaut():
    product_name = request.form['product_name']
    features = [request.form.get(f'feaut_feature{i}') for i in range(1, 4)]
    specs = [request.form.get(f'feaut_spec{i}') for i in range(1, 4)]
    uses = [request.form.get(f'feaut_use{i}') for i in range(1, 4)]
    image = request.files['image']
    image_path = None

    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = f'static/uploads/{filename}'
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO feaut (
            product_name, feaut_feature1, feaut_feature2, feaut_feature3,
            feaut_spec1, feaut_spec2, feaut_spec3,
            feaut_use1, feaut_use2, feaut_use3,
            image_path
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (product_name, *features, *specs, *uses, image_path))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('feaut_form'))

@app.route('/api/feaut', methods=['GET'])
def get_feaut():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM feaut")
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]

        feauts = []
        for row in rows:
            item = dict(zip(column_names, row))
            if item["image_path"]:
                item["image_path"] = url_for('static', filename=item["image_path"].replace('static/', ''))
                item["image_path"] = request.host_url.rstrip('/') + item["image_path"]
            feauts.append(item)

        cursor.close()
        conn.close()
        return jsonify(feauts)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/delete_feaut/<int:id>', methods=['DELETE'])
def delete_feaut(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM feaut WHERE id = %s", (id,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Feaut item deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------- FORM ROUTES -----------------

@app.route('/testimonials')
def testimonials_form():
    return render_template('testimonials.html')

@app.route('/galert')
def galert_form():
    return render_template('galert.html')

@app.route('/feaut')
def feaut_form():
    return render_template('feaut.html')

# ----------------- MAIN -----------------

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Run the Flask app
