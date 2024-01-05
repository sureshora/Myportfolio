from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def base():
    data = {
        'name': 'Suresh Kumar Thulasi Ram',
        'intro': 'Passionate IT Professional',
        # 'skills': ['Python, C++, Java, SQL',
        #     'Node.js, Nest.js, React',
        #     'Nginx, Apache, IIS',
        #     'Monolithic, Microservices, AI, Data Science',
        #     'Docker, Kubernetes, Ansible, Terraform',
        #     'Azure, AWS, Oracle',
        #     'Relational (Oracle10G, MySQL)',
        #     'Power BI, Oracle BI, Tableau',
        #     'Team Leadership, Software Architecture'
        # ],
        # Add other data for projects, achievements, education, and contact
    }
    return render_template('base.html', **data)

# ... other routes ...

if __name__ == '__main__':
    app.run(debug=True)

# Define the 'about' route before app.run()
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/header')
def header():
    return render_template('header.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/achievements')
def achievements():
    return render_template('achievements.html')

@app.route('/footer')
def footer():
    return render_template('footer.html')

if __name__ == '__main__':
    app.run(debug=True)
