
import { BackendCurriculum } from '../types';

export const BACKEND_CURRICULUM: BackendCurriculum = {
  concepts: [
    {
      id: 'client-server',
      title: 'Client-Server: The Pizza Restaurant',
      shortDescription: 'The fundamental dialogue of the web — one asks, the other serves.',
      metaphor: {
        title: 'The Pizza Restaurant',
        description: 'The Client is the Customer who sits at a table and orders. The Server is the Kitchen that cooks and serves. The Request is the order ticket, and the Response is the pizza delivered to your table. The internet is the road connecting the customer to the restaurant.',
        icon: '🍕'
      },
      visualType: 'client-server',
      content: [
        'When you visit a website, an invisible conversation happens between two computers. Your browser is the Client — it asks for things. A remote computer is the Server — it processes and responds.',
        'The Client (your browser or phone) decides what it needs and sends a formatted message called a Request. The Server receives this, runs logic, fetches data, and sends back a Response — which could be HTML, JSON, or even an image.',
        'The Server is simply a computer — often a powerful one in a data center — that is always on and listening for requests. When you type www.google.com, you are dispatching a courier to Google\'s kitchen asking for their "Search Page" dish.'
      ],
      codeExamples: [
        {
          language: 'http',
          label: 'A Typical HTTP Request',
          code: 'GET /menu HTTP/1.1\nHost: pizza-restaurant.com\nAccept: text/html\nUser-Agent: Chrome/120',
          explanation: 'This is what your browser sends when you visit a page. It says: "I want to GET the /menu page from pizza-restaurant.com using Chrome."'
        },
        {
          language: 'http',
          label: 'The Server\'s Response',
          code: 'HTTP/1.1 200 OK\nContent-Type: text/html\n\n<html>\n  <body>Welcome to our Pizza Menu!</body>\n</html>',
          explanation: 'The server replies with 200 OK (success!) and sends back the HTML page. Your browser then renders this into the visual page you see.'
        }
      ],
      keyPoints: [
        'Client = The entity that initiates (browser, phone, app)',
        'Server = The entity that responds (a computer running your code)',
        'Request = The formatted message from Client → Server',
        'Response = The data sent back from Server → Client',
        'The server is REACTIVE — it waits for orders before cooking'
      ],
      interactiveHint: 'Click "Send Order" to see a request travel from the Client to the Server and back!'
    },
    {
      id: 'http-methods',
      title: 'HTTP Methods: The Verbs of the Web',
      shortDescription: 'Not all requests are the same — ordering a pizza is different from asking for the bill.',
      metaphor: {
        title: 'The Restaurant Actions',
        description: 'GET is like asking to see the menu (just looking, not changing anything). POST is handing the waiter your order form (creating something new). PUT/PATCH is calling the waiter back to change your order. DELETE is cancelling order #55.',
        icon: '📋'
      },
      visualType: 'http-methods',
      content: [
        'HTTP distinguishes different intentions using Methods (also called "verbs"). Just as "ordering a pizza" is fundamentally different from "asking for the bill," the web uses different methods to express what the client wants to do.',
        'GET is the most common and is used to retrieve data. It is a "safe" method — it should never change anything on the server. Every time you visit a website, your browser sends a GET request.',
        'POST is used when you submit a form, upload a file, or create a new record. Unlike GET, POST changes the state of the server — a new order is added to the queue.',
        'PUT replaces an entire resource, PATCH updates part of it, and DELETE removes it. These are used in APIs and modern web applications.'
      ],
      codeExamples: [
        {
          language: 'http',
          label: 'GET — Retrieve Data',
          code: 'GET /api/products/42 HTTP/1.1\nHost: shop.com\n\n# Response:\n{\n  "id": 42,\n  "name": "Laptop",\n  "price": 999\n}',
          explanation: 'GET retrieves data. Think of it as "looking" without touching. The server returns the product but nothing changes.'
        },
        {
          language: 'http',
          label: 'POST — Create New Data',
          code: 'POST /api/orders HTTP/1.1\nHost: shop.com\nContent-Type: application/json\n\n{\n  "product_id": 42,\n  "quantity": 1\n}',
          explanation: 'POST sends data to the server to CREATE something new. Here we\'re placing an order. The server\'s state changes — a new order is added.'
        }
      ],
      keyPoints: [
        'GET = Retrieve / Read (safe, no side effects)',
        'POST = Create / Submit (changes server state)',
        'PUT = Replace entire resource',
        'PATCH = Update part of a resource',
        'DELETE = Remove a resource'
      ],
      interactiveHint: 'Click each HTTP method card to see its real-world analogy and example!'
    },
    {
      id: 'status-codes',
      title: 'Status Codes: The Server\'s Short Codes',
      shortDescription: 'Three-digit numbers that tell you exactly what happened with your request.',
      metaphor: {
        title: 'The Kitchen Response',
        description: '2xx means "Everything is fine, here\'s your food!" 3xx means "We\'ve moved, go to our new address." 4xx means "You made a mistake — we don\'t sell that." 5xx means "We made a mistake — the oven is on fire!"',
        icon: '🚦'
      },
      visualType: 'status-codes',
      content: [
        'When the server responds, it uses a three-digit number to summarize the outcome before sending any data. These Status Codes are grouped into "families" by their first digit.',
        'The 2xx family means SUCCESS. 200 OK is the most common — your request worked perfectly. 201 Created means a new resource was successfully made (like after a POST request).',
        'The 4xx family means CLIENT ERROR — you made a mistake. 404 Not Found means the page doesn\'t exist. 403 Forbidden means you\'re not allowed. 401 Unauthorized means you need to log in first.',
        'The 5xx family means SERVER ERROR — the server broke. 500 Internal Server Error is the generic "something went wrong on our end." These are bugs the developer needs to fix.'
      ],
      keyPoints: [
        '200 OK — "Here\'s what you asked for"',
        '201 Created — "New resource made successfully"',
        '301 Moved Permanently — "Go to this new URL instead"',
        '404 Not Found — "This page doesn\'t exist"',
        '403 Forbidden — "You\'re not allowed to see this"',
        '500 Internal Server Error — "The oven is on fire"'
      ],
      interactiveHint: 'Explore each status code family — click to reveal their meaning and a humorous translation!'
    },
    {
      id: 'databases',
      title: 'Databases: The Invisible Warehouse',
      shortDescription: 'Websites need to remember things. Databases are their long-term memory.',
      metaphor: {
        title: 'Excel vs. The Warehouse',
        description: 'Excel is like a visible desk with all your papers spread out. A Database is a massive warehouse that is pitch black. You cannot "see" the data. To get information, you must write a specific request (a Query) to the warehouse manager.',
        icon: '🗄️'
      },
      visualType: 'database',
      content: [
        'Variables in a Python script are ephemeral — they vanish when the script ends. Backend applications require long-term Persistence — data that survives server restarts and serves thousands of users.',
        'A database is a collection of Tables (like Excel sheets). Each table has Columns (fields/properties) and Rows (records/entries). For example, a "Students" table might have columns: ID, Name, Course, Score.',
        'Unlike Excel, you can\'t just click a cell to edit it. Instead, you write Queries in SQL (Structured Query Language) to read, insert, update, or delete data.',
        'Databases are designed for Concurrency (thousands of users reading/writing at once), Integrity (ensuring "Age" is always a number), and Scale (handling billions of records). Excel collapses beyond ~1 million rows.'
      ],
      codeExamples: [
        {
          language: 'sql',
          label: 'Read All Students',
          code: 'SELECT * FROM Students;',
          explanation: 'This query asks: "Give me ALL columns (*) FROM the Students table." It returns every row.'
        },
        {
          language: 'sql',
          label: 'Filter by Course',
          code: "SELECT name, score\nFROM Students\nWHERE course = 'Python';",
          explanation: 'This query asks: "Give me only the name and score FROM Students WHERE their course is Python."'
        },
        {
          language: 'sql',
          label: 'Insert New Record',
          code: "INSERT INTO Students (name, course, score)\nVALUES ('Diana', 'Django', 95);",
          explanation: 'This creates a NEW row in the Students table. The ID is auto-generated.'
        }
      ],
      keyPoints: [
        'Table = A structured collection of related data (like an Excel sheet)',
        'Row = One record/entry (one student, one product)',
        'Column = A field/property (name, age, email)',
        'Primary Key (PK) = A unique identifier for each row (usually auto-incremented ID)',
        'Foreign Key (FK) = A link from one table to another (a student\'s teacher_id links to the Teachers table)',
        'SQL = The language used to talk to the database'
      ],
      interactiveHint: 'Interact with the live database table below — filter, sort, and see the SQL query update in real-time!'
    },
    {
      id: 'sessions',
      title: 'Sessions & Cookies: The Wristband',
      shortDescription: 'HTTP has amnesia. Sessions are how we make the web remember you.',
      metaphor: {
        title: 'The Amnesiac Ticket Taker',
        description: 'Imagine a movie theater where the ticket taker has severe amnesia. You show your ticket, they let you in. You leave to buy popcorn, come back — "Who are you?" They\'ve forgotten. Sessions solve this by giving you a wristband (Cookie) that you show every time.',
        icon: '🎫'
      },
      visualType: 'sessions',
      content: [
        'HTTP is a "stateless" protocol. This means the server treats EVERY request as a brand-new interaction with no memory of the previous one. It\'s like talking to someone who forgets you after every sentence.',
        'This is a problem! If you log in on page 1, how does page 2 know you\'re still logged in? The answer is Sessions and Cookies working together.',
        'When you log in, the server creates a Session (a file/record on the server) with a unique Session ID. It then sends this ID back to your browser as a Cookie — a tiny piece of text stored on your machine.',
        'From now on, every time your browser sends a request, it automatically attaches the Cookie (the wristband). The server reads the Session ID, looks up your file, and says "Ah, User #42, welcome back!"'
      ],
      keyPoints: [
        'HTTP is Stateless — each request is independent with no memory',
        'Session = A server-side record that stores user data (login status, cart items)',
        'Cookie = A tiny text file stored in the browser containing the Session ID',
        'Every request automatically sends the cookie → server checks the session',
        'This is how login "persistence" works across page navigations'
      ],
      interactiveHint: 'Watch the animation: see how a cookie is set after login and automatically sent with every subsequent request!'
    },
    {
      id: 'frameworks',
      title: 'Frameworks: Why Not Build from Scratch?',
      shortDescription: 'Writing a web server in raw Python is possible. Using Django is wise.',
      metaphor: {
        title: 'Construction Kit vs. Raw Materials',
        description: 'Writing a web server from scratch is like building a house by chopping down trees and firing your own bricks. Using Django is like buying a high-end pre-fabricated home kit — foundation, plumbing, wiring, and security are already engineered by experts. Your job is to assemble rooms and choose decor.',
        icon: '🏗️'
      },
      visualType: 'framework-compare',
      content: [
        'People may ask: "Why can\'t I just write a script that listens to a port?" The answer lies in complexity and security.',
        'A real web application needs: URL routing, form validation, database connection management, user authentication, session handling, security protection (CSRF, XSS, SQL Injection), file uploads, email sending, admin dashboards, and much more.',
        'Django is famous for its "Batteries Included" philosophy. It comes with an Admin Panel, Authentication System, Database ORM, Security Middleware, Form Handling, and more — all out of the box.',
        'This contrasts with "micro-frameworks" like Flask, which are more like a box of Lego bricks requiring manual assembly of every basic tool. Django is opinionated — it tells you the best way to structure things.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Raw Python — A Basic Server',
          code: 'from http.server import HTTPServer, BaseHTTPRequestHandler\n\nclass Handler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.end_headers()\n        self.wfile.write(b"Hello World")\n\nserver = HTTPServer(("", 8000), Handler)\nserver.serve_forever()\n# No security, no routing, no DB...',
          explanation: 'This works but gives you NOTHING — no routing, no database, no security, no admin panel. You have to build everything yourself.'
        },
        {
          language: 'python',
          label: 'Django — The Same Thing',
          code: '# views.py\nfrom django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse("Hello World")\n\n# Plus you get: Admin panel, Auth, ORM,\n# Security, Forms, Middleware... FREE!',
          explanation: 'Django gives you the same result PLUS an entire ecosystem of tools. Security, database management, and admin interface are all included.'
        }
      ],
      keyPoints: [
        '"Batteries Included" = Django comes with everything you need',
        'Admin Panel — auto-generated dashboard to manage your database',
        'ORM — interact with databases using Python, not SQL',
        'Security — CSRF, XSS, SQL Injection protection built-in',
        'Auth — login, logout, password hashing, permissions included',
        'Django vs Flask: Django = full kitchen, Flask = empty room with a stove'
      ],
      interactiveHint: 'Compare Django vs Raw Python in the radar chart below — see how "Batteries Included" makes a massive difference!'
    },
    {
      id: 'virtual-envs',
      title: 'Virtual Environments: The Mechanic\'s Toolboxes',
      shortDescription: 'Keep your projects isolated so their tools don\'t clash.',
      metaphor: {
        title: 'Separate Toolboxes',
        description: 'Imagine a mechanic working on two cars. Car A requires metric tools. Car B requires imperial tools. If the mechanic throws all tools into one giant pile, they\'ll grab the wrong wrench. A Virtual Environment is a separate, sealed toolbox for each car.',
        icon: '🧰'
      },
      visualType: 'virtual-env',
      content: [
        'Before installing Django, you must understand Virtual Environments. They solve the "Dependency Hell" problem.',
        'Without virtual environments, ALL Python packages install globally. If Project A needs Django 4.0 and Project B needs Django 5.0, they conflict. Installing one version overwrites the other.',
        'A Virtual Environment (venv) creates an isolated Python installation for EACH project. The packages installed for Project A effectively do not exist for Project B.',
        'Think of it as having separate app stores for your work phone and personal phone — installing TikTok on one doesn\'t install it on the other.'
      ],
      codeExamples: [
        {
          language: 'bash',
          label: 'Step 1: Create Environment',
          code: 'python -m venv my_env',
          explanation: 'This creates a new folder called "my_env" with its own Python installation. It\'s like building a new, empty toolbox.'
        },
        {
          language: 'bash',
          label: 'Step 2: Activate (Windows)',
          code: 'my_env\\Scripts\\activate\n\n# Your prompt changes to:\n(my_env) C:\\Users\\you>',
          explanation: 'Activating the environment is like "opening" the toolbox. Now any tool (package) you install goes into THIS toolbox only.'
        },
        {
          language: 'bash',
          label: 'Step 3: Install Django',
          code: '(my_env) pip install django\n\n# Django is now ONLY inside my_env\n# Other projects cannot see it',
          explanation: 'Django is installed only inside this virtual environment. Your global Python and other projects are completely unaffected.'
        }
      ],
      keyPoints: [
        'Virtual Environment = An isolated Python installation per project',
        'Prevents dependency conflicts between projects',
        'Always create a venv BEFORE installing any packages',
        'Activate with: my_env\\Scripts\\activate (Windows)',
        'Deactivate with: deactivate'
      ],
      interactiveHint: 'Try the terminal commands below to create and activate a virtual environment!'
    },
    {
      id: 'project-structure',
      title: 'Django Project Structure: The Anatomy',
      shortDescription: 'Every file Django creates has a specific purpose. Let\'s explore each one.',
      metaphor: {
        title: 'The Building Departments',
        description: 'manage.py is the Remote Control — you use it to run the server, create database tables, and manage everything. settings.py is the Control Center — it configures how the project behaves. urls.py is the Receptionist — it directs incoming visitors to the right rooms.',
        icon: '📁'
      },
      visualType: 'project-structure',
      content: [
        'When you run django-admin startproject mysite, Django creates a specific directory structure. Each file has a role, and understanding them is crucial.',
        'A Django Project is the entire website (e.g., "University Portal"). An App is a self-contained module within that project (e.g., "Admissions App", "Gradebook App", "Forum App"). One project contains many apps.',
        'Rule of Thumb: A project is a collection of apps and configurations. An app can theoretically be unplugged from one project and plugged into another.',
        'The project structure follows the principle of "Convention over Configuration" — Django has strong opinions about where things go, which makes collaboration easier because every Django project looks the same.'
      ],
      codeExamples: [
        {
          language: 'text',
          label: 'Project Structure',
          code: 'mysite/              ← Project root\n├── manage.py        ← 🎮 Remote Control\n├── mysite/          ← Configuration package\n│   ├── __init__.py  ← Makes it a Python package\n│   ├── settings.py  ← ⚙️ Control Center\n│   ├── urls.py      ← 🗺️ Receptionist/Router\n│   ├── wsgi.py      ← 🔌 Production hookup\n│   └── asgi.py      ← 🔌 Async hookup\n└── myapp/           ← Your custom app\n    ├── models.py    ← 📊 Database definitions\n    ├── views.py     ← 🧠 Business logic\n    ├── urls.py      ← 🗺️ App-level routing\n    └── templates/   ← 🎨 HTML files',
          explanation: 'Each file has a specific job. This separation of concerns makes the project maintainable as it grows.'
        },
        {
          language: 'bash',
          label: 'Creating a Project & App',
          code: '# Create the project\ndjango-admin startproject mysite\n\n# Navigate inside\ncd mysite\n\n# Create an app\npython manage.py startapp myapp\n\n# Run the server\npython manage.py runserver',
          explanation: 'These are the first commands every Django developer runs. startproject creates the skeleton, startapp creates a module within it.'
        }
      ],
      keyPoints: [
        'manage.py = Command-line utility (start server, run migrations, create superuser)',
        'settings.py = Configuration (database, timezone, installed apps, security keys)',
        'urls.py = URL routing table (maps URLs to views)',
        'wsgi.py / asgi.py = Interface between Django and the production web server',
        'Project = The entire website | App = A self-contained feature module',
        'Apps are reusable — they can be moved between projects'
      ],
      interactiveHint: 'Explore the interactive file tree below — click any file to see its role and analogy!'
    }
  ]
};
