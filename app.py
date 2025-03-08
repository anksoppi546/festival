from flask import Flask, request, render_template
import datetime

app = Flask(__name__)

# Function to get client IP
def get_client_ip():
    return request.headers.get('X-Forwarded-For', request.remote_addr)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        user_ip = get_client_ip()
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Log name & IP
        with open("ip_logs.txt", "a") as file:
            file.write(f"{timestamp} - Name: {name}, IP: {user_ip}\n")

        return render_template('index.html', name=name)

    return render_template('index.html', name=None)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
