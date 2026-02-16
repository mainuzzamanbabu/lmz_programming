
import { DjangoCurriculum } from '../types';

export const DJANGO_CURRICULUM: DjangoCurriculum = {
  concepts: [
    {
      id: 'mvt',
      title: 'MVT Architecture: The Restaurant Crew',
      shortDescription: 'Model-View-Template — Django\'s way of organizing code into three clean layers.',
      metaphor: {
        title: 'The Restaurant Crew',
        description: 'The URL Dispatcher is the Host who checks your reservation. The View is the Waiter who takes your order and coordinates everything. The Model is the Chef who handles the data. The Template is the Plate — the beautiful presentation the customer sees.',
        icon: '🍽️'
      },
      visualType: 'mvt',
      content: [
        'Django organizes code into three layers: Model (Data), View (Logic), and Template (Design). This separation makes code clean and manageable.',
        'The flow: User requests a URL → Django matches URL to a View → View asks Model for data → View gives data to Template → Beautiful HTML sent to user.',
        'This is a variation of the famous MVC (Model-View-Controller) pattern used in software engineering. The key difference: Django\'s "View" acts as the Controller, and the "Template" is what MVC calls the "View".'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Model (models.py) — The Chef',
          code: 'from django.db import models\n\nclass Student(models.Model):\n    name = models.CharField(max_length=100)\n    score = models.IntegerField()\n\n    def __str__(self):\n        return self.name',
          explanation: 'The Model defines WHAT data exists. Django auto-generates the SQL table from this Python class. The Chef\'s recipe book.'
        },
        {
          language: 'python',
          label: 'View (views.py) — The Waiter',
          code: 'from django.shortcuts import render\nfrom .models import Student\n\ndef student_list(request):\n    students = Student.objects.all()\n    return render(request, \'list.html\', {\n        \'students\': students\n    })',
          explanation: 'The View receives the request, fetches data from the Model, and passes it to the Template. The Waiter coordinates.'
        },
        {
          language: 'html',
          label: 'Template (list.html) — The Plate',
          code: '<h1>Class List</h1>\n<ul>\n  {% for student in students %}\n    <li>\n      {{ student.name }} — {{ student.score }}\n    </li>\n  {% endfor %}\n</ul>',
          explanation: 'The Template takes the raw data and arranges it into beautiful HTML. The presentation layer the customer sees.'
        }
      ],
      keyPoints: [
        'Model = Defines database structure (the Chef / data handler)',
        'View = Business logic & coordination (the Waiter)',
        'Template = HTML presentation (the Plate)',
        'URL Dispatcher = Routes requests to the right View (the Host)',
        'Separation of concerns = each layer has ONE job'
      ],
      interactiveHint: 'Click the tabs below to see how each MVT component works — with code and analogy side by side!'
    },
    {
      id: 'url-routing',
      title: 'URL Routing: The Mail Sorting Machine',
      shortDescription: 'How Django knows which code to run when someone visits a URL.',
      metaphor: {
        title: 'The Mail Sorting Machine',
        description: 'urls.py is a mechanical mail sorter. The pattern <int:product_id> tells the machine: "If you see a URL starting with \'product/\' followed by a number, capture that number and send it to the product_detail view." If someone types /product/banana/, the machine rejects it because "banana" is not an integer.',
        icon: '📬'
      },
      visualType: 'url-routing',
      content: [
        'Hard-coding URLs for every possible page (e.g., /product/1/, /product/2/) is impossible for dynamic websites. Django uses URL patterns with Path Converters to match URLs dynamically.',
        'The urls.py file acts like a receptionist or mail sorter. It examines the incoming URL, matches it against known patterns, and directs the request to the correct View function.',
        'Path Converters capture parts of the URL and pass them as arguments to views. <int:id> captures integers, <str:slug> captures strings, <uuid:pk> captures UUIDs.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'URL Configuration (urls.py)',
          code: 'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path(\'\', views.home),                       # /\n    path(\'students/\', views.student_list),       # /students/\n    path(\'student/<int:id>/\', views.student_detail),  # /student/42/\n    path(\'course/<str:name>/\', views.course),    # /course/python/\n]',
          explanation: '<int:id> captures a number from the URL and passes it to the view function as the "id" argument. Automatic type validation!'
        },
        {
          language: 'python',
          label: 'The Matching View',
          code: 'def student_detail(request, id):\n    # \'id\' comes from the URL!\n    # /student/42/ → id=42\n    student = Student.objects.get(id=id)\n    return render(request, \'detail.html\', {\n        \'student\': student\n    })',
          explanation: 'The "id" parameter is automatically extracted from the URL and passed to this function. No manual parsing needed!'
        }
      ],
      keyPoints: [
        'urlpatterns = A list of URL patterns Django checks in order',
        'path() = Maps a URL pattern to a view function',
        '<int:id> = Captures an integer from the URL',
        '<str:slug> = Captures a string from the URL',
        'URL patterns are checked top to bottom — first match wins',
        'If no pattern matches → 404 Not Found'
      ],
      interactiveHint: 'Type a URL in the simulator below and see which pattern matches — watch the mail sorting machine in action!'
    },
    {
      id: 'views',
      title: 'Views & Requests: The Waiter\'s Brain',
      shortDescription: 'A view is just a Python function that receives a request and returns a response.',
      metaphor: {
        title: 'The Experienced Waiter',
        description: 'The View is the waiter who takes the customer\'s order (Request), reads it carefully, decides what needs to happen, goes to the kitchen (Model), takes the ingredients to the plating station (Template), and brings back the finished dish (Response).',
        icon: '🧠'
      },
      visualType: 'views',
      content: [
        'The simplest way to define a View in Django is a Python function. This demystifies the process: a web page is just the return value of a function!',
        'Every View function receives a request object as its first parameter. This object is a dossier on the user — it contains who they are, what they want, and how they got here.',
        'The request object contains: request.user (who is making the request), request.method (GET or POST?), request.GET (URL parameters), request.POST (form data), request.META (browser info, IP address).'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Simple View — Hello World',
          code: 'from django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse("Hello, World!")\n\n# Visiting /home shows: Hello, World!',
          explanation: 'A view is just a function! It receives the request and returns a response. That\'s it — the simplest possible web page.'
        },
        {
          language: 'python',
          label: 'View with Template',
          code: 'from django.shortcuts import render\n\ndef dashboard(request):\n    context = {\n        \'username\': request.user.username,\n        \'is_admin\': request.user.is_staff,\n    }\n    return render(request, \'dashboard.html\', context)',
          explanation: 'render() combines a template with data (context) and returns the finished HTML. The waiter takes ingredients to the plating station.'
        },
        {
          language: 'python',
          label: 'Handling GET vs POST',
          code: 'def contact(request):\n    if request.method == \'POST\':\n        # Form was submitted — process data\n        name = request.POST[\'name\']\n        save_message(name)\n        return redirect(\'thanks\')\n    else:\n        # Show the empty form\n        return render(request, \'contact.html\')',
          explanation: 'One view can handle multiple scenarios. GET shows the form, POST processes it. The waiter adapts to what the customer needs.'
        }
      ],
      keyPoints: [
        'A View = A Python function that takes a request and returns a response',
        'request.method = "GET" (viewing) or "POST" (submitting)',
        'request.user = The currently logged-in user',
        'request.GET = URL query parameters (?search=hello)',
        'request.POST = Form submission data',
        'render() = Combine template + data → HTML response'
      ],
      interactiveHint: 'Explore the request object inspector — see what information Django captures about every visitor!'
    },
    {
      id: 'dtl',
      title: 'Django Template Language: Fill in the Blanks',
      shortDescription: 'Mix HTML with dynamic data using Django\'s simple template syntax.',
      metaphor: {
        title: 'The Form Letter',
        description: 'Imagine a "fill in the blank" letter: "Dear _____, Your order #_____ is ready." The Template Language fills in those blanks with real data. {{ variable }} outputs a value, {% tag %} controls logic like loops and conditions.',
        icon: '📝'
      },
      visualType: 'dtl',
      content: [
        'Django does NOT use raw Python in HTML files. Instead, it uses the Django Template Language (DTL) — a simpler, safer syntax specifically designed for templates.',
        'This is a safety feature. If raw Python were allowed in templates, someone could accidentally (or maliciously) write code like {% delete_all_users() %} in an HTML file. DTL prevents this.',
        'There are two main syntaxes: Variables {{ variable_name }} output a value, and Tags {% tag_name %} control logic (loops, conditions, inheritance).'
      ],
      codeExamples: [
        {
          language: 'html',
          label: 'Variables — {{ }}',
          code: '<h1>Welcome, {{ user.username }}!</h1>\n<p>Your email: {{ user.email }}</p>\n<p>Account created: {{ user.date_joined|date:"M d, Y" }}</p>',
          explanation: '{{ }} outputs a value. The | symbol applies "filters" — like date formatting. Think of it as piping through a formatter.'
        },
        {
          language: 'html',
          label: 'Tags — {% %}',
          code: '{% if user.is_authenticated %}\n  <p>Welcome back, {{ user.username }}!</p>\n  <a href="/logout">Logout</a>\n{% else %}\n  <p>Please log in.</p>\n  <a href="/login">Login</a>\n{% endif %}',
          explanation: '{% %} controls logic. This shows different content based on whether the user is logged in. Like a traffic cop directing HTML.'
        },
        {
          language: 'html',
          label: 'Loops — {% for %}',
          code: '<ul>\n{% for product in products %}\n  <li>\n    {{ product.name }} — ${{ product.price }}\n    {% if product.on_sale %}\n      <span class="badge">SALE!</span>\n    {% endif %}\n  </li>\n{% empty %}\n  <li>No products yet.</li>\n{% endfor %}\n</ul>',
          explanation: '{% for %} loops through a list. {% empty %} handles the case when the list is empty. Clean and readable!'
        }
      ],
      keyPoints: [
        '{{ variable }} = Output a value (fill in the blank)',
        '{% tag %} = Logic control (if/else, for loops)',
        '{{ value|filter }} = Apply a filter (date formatting, uppercase, etc.)',
        '{% if %} / {% else %} / {% endif %} = Conditional logic',
        '{% for item in list %} / {% endfor %} = Loop through items',
        '{% empty %} = Shown when loop list is empty'
      ],
      interactiveHint: 'See the template playground — watch how DTL variables and tags transform into final HTML!'
    },
    {
      id: 'template-inheritance',
      title: 'Template Inheritance: The Picture Frame',
      shortDescription: 'Write your navbar and footer ONCE. Every page inherits it automatically.',
      metaphor: {
        title: 'The Picture Frame',
        description: 'Think of base.html as a Picture Frame. The frame (navbar, footer) is solid and unchanging. Child templates (home.html, about.html) are the different photographs you slide into the frame. You don\'t buy a new frame for every photo — you reuse the structure.',
        icon: '🖼️'
      },
      visualType: 'template-inheritance',
      content: [
        'Without template inheritance, beginners copy-paste the navigation bar and footer into EVERY HTML file. This violates DRY (Don\'t Repeat Yourself) — change the nav once, change it in 50 files.',
        'Template Inheritance solves this. Create a base.html with the skeleton: <html>, <head>, navbar, footer. Define "blocks" (empty holes) that child templates fill in.',
        'Child templates "extend" the base and only provide content for the blocks. The rest is inherited automatically.'
      ],
      codeExamples: [
        {
          language: 'html',
          label: 'base.html — The Frame',
          code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>{% block title %}My Site{% endblock %}</title>\n</head>\n<body>\n    <nav>My Navbar Here</nav>\n    \n    <div id="content">\n        {% block main_content %}\n        {% endblock %}\n    </div>\n    \n    <footer>© 2026 My Site</footer>\n</body>\n</html>',
          explanation: 'The base template defines the frame. {% block %} creates named holes that child templates will fill. The nav and footer are written ONCE.'
        },
        {
          language: 'html',
          label: 'home.html — A Photo',
          code: '{% extends "base.html" %}\n\n{% block title %}Home{% endblock %}\n\n{% block main_content %}\n  <h1>Welcome Home!</h1>\n  <p>This content slides into the frame.</p>\n{% endblock %}',
          explanation: '{% extends %} says "I\'m a child of base.html." It only fills in the blocks — navbar and footer come automatically from the parent.'
        }
      ],
      keyPoints: [
        'DRY = Don\'t Repeat Yourself — write common elements once',
        'base.html = The parent template (the frame)',
        '{% block name %} = A named hole in the frame',
        '{% extends "base.html" %} = Child inherits the frame',
        'Child only fills in the blocks — everything else is inherited',
        'You can have multi-level inheritance (base → layout → page)'
      ],
      interactiveHint: 'Watch the visual: see how child templates slide into the base frame, inheriting the navbar and footer!'
    },
    {
      id: 'orm',
      title: 'The ORM: Python Speaks to SQL',
      shortDescription: 'Stop writing SQL. Talk to your database using Python objects instead.',
      metaphor: {
        title: 'The Bilingual Translator',
        description: 'The Database speaks SQL. You speak Python. The ORM is a bilingual translator in between. You say User.objects.all() in Python, the ORM tells the database SELECT * FROM auth_user in SQL, gets the results, and packages them into Python objects for you.',
        icon: '🔄'
      },
      visualType: 'orm',
      content: [
        'ORM stands for Object-Relational Mapper. It\'s the bridge between your Python code and the SQL database. You write Python, Django writes SQL.',
        'A Model class = A database table. An attribute = A column. An instance = A row. This mapping is what makes it "Object-Relational."',
        'Field types matter! CharField is for short text, TextField for long text, IntegerField for numbers, DateTimeField for dates. Each translates to a specific SQL column type.',
        'Constraints like max_length prevent database overflow. null=False ensures data integrity — every student MUST have a name.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Define a Model (Table)',
          code: 'class Post(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    author = models.ForeignKey(User, on_delete=models.CASCADE)\n    created_at = models.DateTimeField(auto_now_add=True)\n    is_published = models.BooleanField(default=False)',
          explanation: 'Each line = a database column. Django auto-generates the table with proper SQL types. CharField → VARCHAR, TextField → TEXT, etc.'
        },
        {
          language: 'python',
          label: 'Query the Database',
          code: '# Get all posts\nPost.objects.all()              # SELECT * FROM posts\n\n# Filter\nPost.objects.filter(is_published=True)  # WHERE is_published = true\n\n# Get one\nPost.objects.get(id=1)          # WHERE id = 1\n\n# Create\nPost.objects.create(\n    title="My Post",\n    content="Hello!",\n    author=request.user\n)',
          explanation: 'The ORM translates these Python calls into SQL automatically. You never write a single SQL statement!'
        }
      ],
      keyPoints: [
        'ORM = Object-Relational Mapper (Python ↔ SQL translator)',
        'Class = Table, Attribute = Column, Instance = Row',
        '.objects.all() = SELECT * (get everything)',
        '.objects.filter() = SELECT WHERE (filter by condition)',
        '.objects.get() = Get ONE specific record',
        '.objects.create() = INSERT INTO (add new record)'
      ],
      interactiveHint: 'Try the ORM translator: type Python queries and see the SQL equivalent appear alongside the results!'
    },
    {
      id: 'migrations',
      title: 'Migrations: Blueprint → Instructions → Build',
      shortDescription: 'How Django safely evolves your database without losing data.',
      metaphor: {
        title: 'Architecture vs. Construction',
        description: 'Models are the Architect\'s Blueprint — they show where walls should go. makemigrations writes the Construction Instructions (plans the change). migrate is the Construction Crew who physically alters the building (database). Separate steps = version-controlled, reversible changes.',
        icon: '🏛️'
      },
      visualType: 'migrations',
      content: [
        'When you write a Model, you have merely created a plan. The database doesn\'t know about it yet! Migrations bridge this gap.',
        'Step 1: makemigrations — Django compares your models.py to the database and generates a migration file describing what changed (like "add a column called email").',
        'Step 2: migrate — Django reads the migration file and executes the SQL commands to actually change the database structure.',
        'Why separate them? Version control! If something goes wrong, you can look at the migration files to see exactly what happened, and even "rollback" to a previous state.'
      ],
      codeExamples: [
        {
          language: 'bash',
          label: 'The Migration Workflow',
          code: '# 1. You modify models.py (add/change/remove fields)\n\n# 2. Generate migration instructions\npython manage.py makemigrations\n# Output: Created 0001_initial.py\n\n# 3. Apply the migration (build it!)\npython manage.py migrate\n# Output: Applying myapp.0001_initial... OK',
          explanation: 'makemigrations = write the plan. migrate = execute the plan. Always in this order!'
        },
        {
          language: 'python',
          label: 'What a Migration File Looks Like',
          code: '# 0002_add_email_field.py (auto-generated)\nclass Migration(migrations.Migration):\n    dependencies = [\n        (\'myapp\', \'0001_initial\'),\n    ]\n    operations = [\n        migrations.AddField(\n            model_name=\'student\',\n            name=\'email\',\n            field=models.EmailField(default=\'\'),\n        ),\n    ]',
          explanation: 'Django auto-generates this file. It says: "After migration 0001, add an email column to the student table." Clear, versioned, reversible.'
        }
      ],
      keyPoints: [
        'makemigrations = Generate the change plan (Blueprint → Instructions)',
        'migrate = Execute the plan (Instructions → Construction)',
        'Migration files = Version-controlled database changes',
        'Never modify the database directly — always use migrations',
        'Rollback: python manage.py migrate myapp 0001 (go back to migration 0001)'
      ],
      interactiveHint: 'Watch the step-by-step animation: Blueprint → Instructions → Construction!'
    },
    {
      id: 'forms',
      title: 'Forms & Security: The Bouncer',
      shortDescription: 'Accepting user input is dangerous. Django Forms check every ID at the door.',
      metaphor: {
        title: 'The Club Bouncer',
        description: 'The HTML form is the line of people outside the club. Anyone can stand in line. The Django Form (form.is_valid()) is the Bouncer at the door. They check every ID: "Is this email valid? Is this password long enough?" Bad data gets kicked out with clear error messages.',
        icon: '🛡️'
      },
      visualType: 'forms',
      content: [
        'Accepting user input is the most dangerous part of web development. Users can enter typos, malicious code (XSS), or huge files that crash the server.',
        'Django Forms validate, clean, and sanitize all user input automatically. They also generate the HTML form fields and display error messages.',
        'CSRF Protection: When Django renders a form, it includes a hidden token ({% csrf_token %}). When submitted, Django checks for this token. If a hacker tries to submit from another website, they won\'t have the token → 403 Forbidden.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Define a Form',
          code: 'from django import forms\n\nclass ContactForm(forms.Form):\n    name = forms.CharField(max_length=100)\n    email = forms.EmailField()\n    message = forms.CharField(\n        widget=forms.Textarea,\n        min_length=10\n    )',
          explanation: 'Django validates automatically: name must be ≤100 chars, email must be valid format, message must be ≥10 chars. The Bouncer checks everything.'
        },
        {
          language: 'python',
          label: 'Process the Form in a View',
          code: 'def contact(request):\n    if request.method == \'POST\':\n        form = ContactForm(request.POST)\n        if form.is_valid():           # Bouncer says OK!\n            name = form.cleaned_data[\'name\']\n            send_email(name)\n            return redirect(\'thanks\')\n        # form.errors contains what went wrong\n    else:\n        form = ContactForm()          # Empty form\n    return render(request, \'contact.html\', {\'form\': form})',
          explanation: 'is_valid() runs all validations. cleaned_data contains sanitized, safe data. If invalid, errors are automatically attached to the form.'
        },
        {
          language: 'html',
          label: 'Template with CSRF Token',
          code: '<form method="POST">\n    {% csrf_token %}\n    {{ form.as_p }}\n    <button type="submit">Send</button>\n</form>\n\n{% if form.errors %}\n  <div class="alert">\n    Please fix the errors below.\n  </div>\n{% endif %}',
          explanation: '{% csrf_token %} adds the secret handshake. {{ form.as_p }} auto-generates all input fields. Errors display automatically!'
        }
      ],
      keyPoints: [
        'Never trust user input — always validate server-side',
        'form.is_valid() = The Bouncer checks all IDs',
        'form.cleaned_data = Safe, validated data',
        'form.errors = What went wrong (shown to user)',
        '{% csrf_token %} = Secret handshake preventing cross-site attacks',
        'CSRF = Cross-Site Request Forgery (someone faking a form submission)'
      ],
      interactiveHint: 'Try the bouncer simulator: submit form data and watch the validation pass or fail!'
    },
    {
      id: 'crud',
      title: 'CRUD: The Four Operations of Everything',
      shortDescription: 'Create, Read, Update, Delete — almost every web app is a variation of these.',
      metaphor: {
        title: 'The Task Manager',
        description: 'CRUD maps to everyday actions: Create (add a new task), Read (view your tasks), Update (edit a task description), Delete (remove a completed task). Instagram, Amazon, Twitter — they are all sophisticated CRUD applications.',
        icon: '✏️'
      },
      visualType: 'crud',
      content: [
        'Almost all web applications are variations of CRUD: Create, Read, Update, Delete. Understanding this paradigm means understanding 90% of web development.',
        'Read comes in two flavors: List View (show all tasks) and Detail View (show one specific task). These use .objects.all() and .objects.get() respectively.',
        'Create and Update are complex because they handle both GET (show the form) and POST (process the data) in the same view. Always follow the Post/Redirect/Get pattern!',
        'Delete safety rule: NEVER use a GET request (a simple link) to delete data. If it\'s a link, a search engine crawler (GoogleBot) will click it and delete your database! Always use POST with a form.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Create — Add a New Task',
          code: 'def task_create(request):\n    if request.method == \'POST\':\n        form = TaskForm(request.POST)\n        if form.is_valid():\n            form.save()                # Save to DB\n            return redirect(\'task_list\')  # REDIRECT!\n    else:\n        form = TaskForm()\n    return render(request, \'task_form.html\', {\'form\': form})',
          explanation: 'GET shows empty form. POST validates and saves. Always REDIRECT after save — if user refreshes, they won\'t accidentally resubmit!'
        },
        {
          language: 'python',
          label: 'Read — List All Tasks',
          code: 'def task_list(request):\n    tasks = Task.objects.all().order_by(\'-created_at\')\n    return render(request, \'task_list.html\', {\n        \'tasks\': tasks\n    })',
          explanation: 'Simple! Fetch all tasks sorted by newest first, pass to template.'
        },
        {
          language: 'python',
          label: 'Delete — With Safety',
          code: 'def task_delete(request, pk):\n    task = get_object_or_404(Task, pk=pk)\n    if request.method == \'POST\':\n        task.delete()\n        return redirect(\'task_list\')\n    return render(request, \'confirm_delete.html\', {\n        \'task\': task\n    })',
          explanation: 'DELETE uses POST, not GET! Shows a confirmation page first. get_object_or_404 handles missing tasks gracefully.'
        }
      ],
      keyPoints: [
        'CRUD = Create, Read, Update, Delete',
        'Read: List (all items) vs Detail (one item)',
        'Post/Redirect/Get = Save data → redirect → prevents double-submit on refresh',
        'NEVER use GET links for Delete — use POST forms',
        'get_object_or_404() = Returns object or shows 404 page',
        'Most web apps = sophisticated CRUD with extra features'
      ],
      interactiveHint: 'Try the mini task manager below — create, edit, and delete tasks to see CRUD in action!'
    },
    {
      id: 'relationships',
      title: 'Relationships: Connecting Tables',
      shortDescription: 'Data is rarely isolated. Tasks belong to Users. Comments belong to Posts.',
      metaphor: {
        title: 'The Family Connections',
        description: 'ForeignKey is like "One Teacher has Many Students" — each student points to their teacher. ManyToMany is like "Pizzas and Toppings" — one pizza has many toppings, and one topping appears on many pizzas.',
        icon: '🔗'
      },
      visualType: 'relationships',
      content: [
        'In relational databases, data is split into separate tables linked by ID numbers (Foreign Keys). This prevents data duplication.',
        'One-to-Many (ForeignKey): One Teacher has many Students. Each student row has a teacher_id column pointing to their teacher.',
        'Many-to-Many (ManyToManyField): A Pizza has many Toppings; a Topping appears on many Pizzas. Django creates a junction table automatically.',
        'Cascading Deletes: What happens when you delete the teacher? CASCADE = delete all their students too (nuclear option). SET_NULL = students remain but have no teacher assigned.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'One-to-Many (ForeignKey)',
          code: 'class Comment(models.Model):\n    post = models.ForeignKey(\n        Post,\n        on_delete=models.CASCADE,\n        related_name=\'comments\'\n    )\n    text = models.TextField()\n    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)\n\n# Usage:\npost.comments.all()     # All comments on a post\ncomment.post            # The post this comment belongs to',
          explanation: 'ForeignKey creates a link. CASCADE: if post deleted → comments deleted. SET_NULL: if user deleted → author becomes null.'
        },
        {
          language: 'python',
          label: 'Many-to-Many',
          code: 'class Pizza(models.Model):\n    name = models.CharField(max_length=100)\n    toppings = models.ManyToManyField(\'Topping\')\n\nclass Topping(models.Model):\n    name = models.CharField(max_length=50)\n\n# Usage:\npizza.toppings.all()         # All toppings on this pizza\ntopping.pizza_set.all()      # All pizzas with this topping\npizza.toppings.add(cheese)   # Add a topping',
          explanation: 'ManyToMany works both ways. Django auto-creates a junction table behind the scenes. No SQL needed!'
        }
      ],
      keyPoints: [
        'ForeignKey = One-to-Many (one teacher → many students)',
        'ManyToManyField = Many-to-Many (pizzas ↔ toppings)',
        'on_delete=CASCADE = Delete parent → delete children',
        'on_delete=SET_NULL = Delete parent → children get null',
        'related_name = How to access reverse relationships',
        'select_related() = Optimize queries with JOINs (avoid N+1 problem)'
      ],
      interactiveHint: 'Explore the entity relationship diagram — see how tables connect with foreign keys!'
    },
    {
      id: 'middleware',
      title: 'Middleware: The Onion Layers',
      shortDescription: 'Code that runs on EVERY request and EVERY response — globally.',
      metaphor: {
        title: 'The Onion Model',
        description: 'The View is the core of the onion. The Request must pass through several outer layers (Middleware) to reach the center. Security Middleware checks if the connection is secure. Session Middleware checks for the wristband cookie. Auth Middleware associates the wristband with a User. Then the Response travels back out through the same layers.',
        icon: '🧅'
      },
      visualType: 'middleware',
      content: [
        'Middleware is code that runs globally on EVERY request and EVERY response. It sits between the incoming request and your view — like layers of an onion.',
        'When a request arrives, it passes through each middleware layer before reaching your view. When the response leaves, it passes back through the same layers in reverse.',
        'Django includes critical middleware by default: SecurityMiddleware (HTTPS), SessionMiddleware (manages sessions), AuthenticationMiddleware (identifies users), CsrfViewMiddleware (prevents CSRF attacks).'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Middleware in settings.py',
          code: 'MIDDLEWARE = [\n    \'django.middleware.security.SecurityMiddleware\',     # Layer 1: HTTPS?\n    \'django.contrib.sessions.middleware.SessionMiddleware\',  # Layer 2: Session\n    \'django.middleware.common.CommonMiddleware\',         # Layer 3: Common\n    \'django.middleware.csrf.CsrfViewMiddleware\',         # Layer 4: CSRF\n    \'django.contrib.auth.middleware.AuthenticationMiddleware\',  # Layer 5: User\n]',
          explanation: 'Order matters! Each request passes through these layers top-to-bottom. Responses pass back bottom-to-top.'
        },
        {
          language: 'python',
          label: 'Custom Middleware Example',
          code: 'import time\n\nclass TimingMiddleware:\n    def __init__(self, get_response):\n        self.get_response = get_response\n\n    def __call__(self, request):\n        start = time.time()\n        response = self.get_response(request)  # Pass to next layer\n        duration = time.time() - start\n        response[\'X-Request-Duration\'] = f\"{duration:.3f}s\"\n        return response',
          explanation: 'This custom middleware measures how long every request takes. It runs on EVERY request automatically — no decorators needed.'
        }
      ],
      keyPoints: [
        'Middleware = Global code running on every request/response',
        'Request flows: Client → Middleware layers → View',
        'Response flows: View → Middleware layers (reversed) → Client',
        'Order in MIDDLEWARE list matters!',
        'Built-in: Security, Session, CSRF, Auth middleware',
        'Custom middleware: logging, timing, rate limiting, etc.'
      ],
      interactiveHint: 'Watch the onion animation — see a request pass through each middleware layer to reach the view, and back!'
    },
    {
      id: 'auth',
      title: 'Authentication: The VIP Rope',
      shortDescription: 'Login, logout, password hashing, and permission checking — all built-in.',
      metaphor: {
        title: 'The VIP Velvet Rope',
        description: 'The @login_required decorator is a velvet rope in front of your view. If the user isn\'t on the VIP list (logged in), they get bounced to the login page. Django provides the entire VIP system: sign-up, login, logout, and password hashing.',
        icon: '🎭'
      },
      visualType: 'auth',
      content: [
        'Django provides a complete authentication system out of the box. User model with pre-hashed passwords (never stored in plain text!), login/logout views, password reset, and permission decorators.',
        'The @login_required decorator is the simplest way to protect a view. If the user is not logged in, they are automatically redirected to the login page.',
        'Django also supports Permissions and Groups for fine-grained access control. You can check if a user is_staff (admin), is_superuser, or has specific permissions.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: '@login_required Decorator',
          code: 'from django.contrib.auth.decorators import login_required\n\n@login_required\ndef dashboard(request):\n    # Only logged-in users can see this!\n    return render(request, \'dashboard.html\', {\n        \'user\': request.user\n    })\n\n# Not logged in? → Redirect to /accounts/login/',
          explanation: '@login_required acts as a VIP rope. If you\'re not on the list, you get redirected to the login page automatically.'
        },
        {
          language: 'python',
          label: 'User Authentication in Views',
          code: 'from django.contrib.auth import authenticate, login, logout\n\ndef login_view(request):\n    if request.method == \'POST\':\n        username = request.POST[\'username\']\n        password = request.POST[\'password\']\n        user = authenticate(request, username=username, password=password)\n        if user is not None:\n            login(request, user)         # Set the session\n            return redirect(\'dashboard\')\n        else:\n            return render(request, \'login.html\', {\n                \'error\': \'Invalid credentials\'\n            })',
          explanation: 'authenticate() checks the password hash. login() creates the session (gives the wristband). Django handles all the cryptography!'
        }
      ],
      keyPoints: [
        '@login_required = VIP rope for views',
        'Passwords are auto-hashed — never stored in plain text',
        'authenticate() = Check credentials securely',
        'login() = Create session (issue the wristband)',
        'logout() = Destroy session (take back the wristband)',
        'request.user = The currently authenticated user (always available)'
      ],
      interactiveHint: 'See the VIP rope in action — watch how login creates a session and how @login_required protects views!'
    },
    {
      id: 'deployment',
      title: 'Deployment: Opening the Restaurant',
      shortDescription: 'Moving from your laptop to a real server the whole world can access.',
      metaphor: {
        title: 'Backyard Camping → Wilderness Survival',
        description: 'Running python manage.py runserver is like camping in the backyard — safe and easy. Deployment is like surviving in the wilderness. You need real security (DEBUG=False), a real database (PostgreSQL), and professional servers (Gunicorn + Nginx) instead of Django\'s toy server.',
        icon: '🚀'
      },
      visualType: 'deployment',
      content: [
        'The development server (manage.py runserver) is designed for ONE developer on ONE machine. It\'s single-threaded, has no security hardening, and crumbles under real traffic.',
        'Production deployment requires multiple critical changes: disable Debug mode, hide the Secret Key, switch databases, and use professional server software.',
        'Gunicorn (Application Server) runs your Python/Django code. Nginx (Web Server) handles static files, HTTPS, and traffic routing. They work together like Chef + Front-of-House Manager.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'settings.py — Production Changes',
          code: '# NEVER in production:\nDEBUG = False    # Hide error details from hackers\n\n# Hide the secret key in environment variables:\nimport os\nSECRET_KEY = os.environ.get(\'DJANGO_SECRET_KEY\')\n\n# Use a real database:\nDATABASES = {\n    \'default\': {\n        \'ENGINE\': \'django.db.backends.postgresql\',\n        \'NAME\': os.environ.get(\'DB_NAME\'),\n        \'USER\': os.environ.get(\'DB_USER\'),\n        \'PASSWORD\': os.environ.get(\'DB_PASSWORD\'),\n    }\n}\n\nALLOWED_HOSTS = [\'mysite.com\', \'www.mysite.com\']',
          explanation: 'DEBUG=False prevents exposing code to hackers. SECRET_KEY in env vars prevents it from being committed to GitHub. PostgreSQL replaces SQLite.'
        },
        {
          language: 'bash',
          label: 'Deployment Commands',
          code: '# Collect all static files into one folder\npython manage.py collectstatic\n\n# Run with Gunicorn (production server)\ngunicorn mysite.wsgi:application --workers 4\n\n# Nginx serves static files + proxies to Gunicorn\n# (configured separately in /etc/nginx/sites-available/)',
          explanation: 'collectstatic gathers CSS/JS/images into one folder for Nginx to serve. Gunicorn runs 4 worker processes for handling concurrent requests.'
        }
      ],
      keyPoints: [
        'DEBUG = False — NEVER show error details in production',
        'SECRET_KEY in environment variables — never in code/GitHub',
        'SQLite → PostgreSQL — use a real database for concurrency',
        'Gunicorn = Application Server (runs Python code)',
        'Nginx = Web Server (serves static files, handles HTTPS)',
        'collectstatic = Gather all static files for production serving'
      ],
      interactiveHint: 'Work through the deployment checklist below — toggle each item to \'production-ready\' status!'
    }
  ]
};
