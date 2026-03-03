
import { DrfCurriculum } from '../types';

export const DRF_CURRICULUM: DrfCurriculum = {
  concepts: [
    {
      id: 'drf-intro',
      title: 'Django REST Framework: The API Factory',
      shortDescription: 'Turn your Django project into a powerful API that any frontend or mobile app can consume.',
      metaphor: {
        title: 'The Restaurant Drive-Through',
        description: 'Regular Django is a dine-in restaurant — it serves beautiful HTML plates (templates). Django REST Framework adds a drive-through window — it serves raw JSON data that any car (React, Flutter, mobile app) can pick up and consume however they want.',
        icon: '🏭'
      },
      visualType: 'drf-intro',
      content: [
        'Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. While Django serves HTML pages, DRF serves JSON data — the universal language of modern apps.',
        'Why do we need APIs? Modern applications are split: a React frontend, a mobile app, or even another server all need to talk to your backend. They don\'t want HTML — they want raw data in JSON format. DRF makes this effortless.',
        'DRF sits on top of Django. You still use Django\'s Models, URLs, and settings — DRF just adds Serializers (data converters), API Views (smart controllers), and a browsable API (built-in testing tool).',
        'Installation is simple: pip install djangorestframework, add \'rest_framework\' to INSTALLED_APPS, and you\'re ready to go. Everything you know about Django still applies!'
      ],
      codeExamples: [
        {
          language: 'bash',
          label: 'Step 1: Install DRF',
          code: '# Inside your virtual environment\n(myenv) pip install djangorestframework\n\n# Verify installation\n(myenv) pip show djangorestframework\n# Name: djangorestframework\n# Version: 3.15.x',
          explanation: 'Install DRF with pip, just like any Python package. It adds itself on top of your existing Django project.'
        },
        {
          language: 'python',
          label: 'Step 2: Add to settings.py',
          code: '# settings.py\nINSTALLED_APPS = [\n    \'django.contrib.admin\',\n    \'django.contrib.auth\',\n    \'django.contrib.contenttypes\',\n    \'django.contrib.sessions\',\n    \'django.contrib.messages\',\n    \'django.contrib.staticfiles\',\n    \n    # Third-party apps\n    \'rest_framework\',    # ← Add this!\n    \n    # Your apps\n    \'myapp\',\n]',
          explanation: 'Add \'rest_framework\' to INSTALLED_APPS. This enables DRF\'s serializers, views, renderers, and the browsable API interface.'
        },
        {
          language: 'python',
          label: 'Django View vs DRF View',
          code: '# Traditional Django View (returns HTML)\ndef student_list(request):\n    students = Student.objects.all()\n    return render(request, \'list.html\', {\'students\': students})\n\n# DRF API View (returns JSON)\nfrom rest_framework.decorators import api_view\nfrom rest_framework.response import Response\n\n@api_view([\'GET\'])\ndef student_list_api(request):\n    students = Student.objects.all()\n    serializer = StudentSerializer(students, many=True)\n    return Response(serializer.data)',
          explanation: 'The key difference: Django views return HTML via templates. DRF views return JSON via serializers. Same data, different format!'
        }
      ],
      keyPoints: [
        'DRF = Django REST Framework — builds APIs on top of Django',
        'APIs serve JSON data instead of HTML pages',
        'Any client (React, Flutter, mobile) can consume your API',
        'pip install djangorestframework → Install DRF',
        'Add \'rest_framework\' to INSTALLED_APPS',
        'DRF provides: Serializers, API Views, Routers, Browsable API'
      ],
      interactiveHint: 'Watch the comparison: Django serves HTML plates, DRF serves JSON takeout boxes!'
    },
    {
      id: 'drf-serializers',
      title: 'Serializers: The Universal Translator',
      shortDescription: 'Convert Python objects to JSON and validate incoming data — the heart of every API.',
      metaphor: {
        title: 'The Currency Exchange Counter',
        description: 'A Serializer is like a currency exchange counter at the airport. Your Python objects are in "Python currency." The outside world (React, mobile apps) only accepts "JSON currency." The Serializer converts back and forth — Python → JSON (serialization) and JSON → Python (deserialization) — while checking for counterfeits (validation).',
        icon: '🔄'
      },
      visualType: 'drf-serializers',
      content: [
        'Serializers are the backbone of DRF. They do THREE jobs: (1) Convert Python objects → JSON for API responses, (2) Convert incoming JSON → Python objects for saving, (3) Validate all incoming data.',
        'ModelSerializer is the most common type. Just like Django\'s ModelForm auto-generates form fields from a Model, ModelSerializer auto-generates API fields from a Model. You specify the model and fields — DRF handles the rest.',
        'Serializers handle nested relationships, read-only fields, custom validation, and computed fields. They are incredibly powerful yet simple to define.',
        'The serializer.data property gives you the serialized (JSON-ready) Python dictionary. The serializer.is_valid() method validates incoming data — just like form.is_valid() in Django forms.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'ModelSerializer — The Easy Way',
          code: 'from rest_framework import serializers\nfrom .models import Student\n\nclass StudentSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Student\n        fields = [\'id\', \'name\', \'roll_number\', \'grade\', \'email\']\n        # Or use: fields = \'__all__\' for ALL fields',
          explanation: 'ModelSerializer reads your Model and auto-generates JSON fields. Just specify which fields to include. Like ModelForm but for APIs!'
        },
        {
          language: 'python',
          label: 'Serialization — Python → JSON',
          code: '# Convert a Python object to JSON\nstudent = Student.objects.get(id=1)\nserializer = StudentSerializer(student)\nprint(serializer.data)\n# {\'id\': 1, \'name\': \'Alice\', \'roll_number\': \'S001\',\n#  \'grade\': \'10th\', \'email\': \'alice@school.com\'}\n\n# Multiple objects? Use many=True\nstudents = Student.objects.all()\nserializer = StudentSerializer(students, many=True)\n# [{...}, {...}, {...}]',
          explanation: 'Serialization converts Python → JSON. For a single object, pass it directly. For a queryset, use many=True.'
        },
        {
          language: 'python',
          label: 'Deserialization — JSON → Python (with validation)',
          code: '# Incoming JSON data from a POST request\ndata = {\'name\': \'Bob\', \'roll_number\': \'S002\', \'grade\': \'11th\'}\n\nserializer = StudentSerializer(data=data)\nif serializer.is_valid():          # Validate!\n    serializer.save()               # Save to database\n    print(serializer.data)          # Saved object as JSON\nelse:\n    print(serializer.errors)        # Validation errors\n    # {\'email\': [\'This field is required.\']}',
          explanation: 'Deserialization converts JSON → Python and validates. is_valid() checks all fields. save() creates or updates the database record.'
        },
        {
          language: 'python',
          label: 'Custom Validation',
          code: 'class StudentSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Student\n        fields = \'__all__\'\n\n    def validate_roll_number(self, value):\n        \"\"\"Roll number must start with \'S\'\"\"\"\n        if not value.startswith(\'S\'):\n            raise serializers.ValidationError(\n                \"Roll number must start with \'S\'.\"\n            )\n        return value\n\n    def validate(self, data):\n        \"\"\"Cross-field validation\"\"\"\n        if data.get(\'grade\') == \'12th\' and not data.get(\'email\'):\n            raise serializers.ValidationError(\n                \"12th graders must provide an email.\"\n            )\n        return data',
          explanation: 'validate_<field> validates a single field. validate() validates across multiple fields. Raise ValidationError to reject bad data.'
        }
      ],
      keyPoints: [
        'Serializer = Converts Python ↔ JSON (like a currency exchange)',
        'ModelSerializer = Auto-generates fields from your Model',
        'serializer.data = The serialized JSON-ready dictionary',
        'serializer.is_valid() = Validates incoming data',
        'serializer.save() = Creates or updates in database',
        'validate_fieldname() = Custom validation per field',
        'many=True = Serialize a list/queryset instead of a single object'
      ],
      interactiveHint: 'Watch the currency exchange animation: Python objects go in, JSON comes out — and vice versa!'
    },
    {
      id: 'drf-views',
      title: 'API Views & ViewSets: The Smart Waiter',
      shortDescription: 'Handle GET, POST, PUT, DELETE in one place — with automatic error handling and permissions.',
      metaphor: {
        title: 'The All-In-One Receptionist',
        description: 'A ViewSet is a super-receptionist who handles EVERY type of request at one desk: "Want to see all students? GET /students/. Want to add one? POST /students/. Want to update? PUT /students/1/. Want to delete? DELETE /students/1/." One class, all operations — automatically.',
        icon: '🤖'
      },
      visualType: 'drf-views',
      content: [
        'DRF provides three levels of views, from simple to powerful: @api_view (function decorator), APIView (class-based), and ViewSet (the most powerful, handles all CRUD automatically).',
        '@api_view is the simplest — it\'s a decorator for function-based views. You specify which HTTP methods it accepts ([\'GET\', \'POST\']) and DRF handles parsing, authentication, and error formatting.',
        'ModelViewSet is the ultimate shortcut. It provides list, create, retrieve, update, and destroy actions — all automatically generated from your Model and Serializer. One class replaces 5 separate views!',
        'DRF also provides built-in Authentication (Token, Session, JWT) and Permission classes (IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly) to secure your API.'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Level 1: @api_view (Simple)',
          code: 'from rest_framework.decorators import api_view\nfrom rest_framework.response import Response\nfrom rest_framework import status\n\n@api_view([\'GET\', \'POST\'])\ndef student_list(request):\n    if request.method == \'GET\':\n        students = Student.objects.all()\n        serializer = StudentSerializer(students, many=True)\n        return Response(serializer.data)\n\n    elif request.method == \'POST\':\n        serializer = StudentSerializer(data=request.data)\n        if serializer.is_valid():\n            serializer.save()\n            return Response(serializer.data, status=status.HTTP_201_CREATED)\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)',
          explanation: '@api_view wraps a regular function. request.data replaces request.POST for parsed JSON. Response auto-converts to JSON.'
        },
        {
          language: 'python',
          label: 'Level 2: APIView (Class-Based)',
          code: 'from rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom rest_framework import status\n\nclass StudentListView(APIView):\n    def get(self, request):\n        students = Student.objects.all()\n        serializer = StudentSerializer(students, many=True)\n        return Response(serializer.data)\n\n    def post(self, request):\n        serializer = StudentSerializer(data=request.data)\n        if serializer.is_valid():\n            serializer.save()\n            return Response(serializer.data, status=status.HTTP_201_CREATED)\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)',
          explanation: 'APIView uses separate methods for each HTTP verb. Cleaner organization. DRF handles content negotiation and error formatting.'
        },
        {
          language: 'python',
          label: 'Level 3: ModelViewSet (The Power Move)',
          code: 'from rest_framework import viewsets\nfrom .models import Student\nfrom .serializers import StudentSerializer\n\nclass StudentViewSet(viewsets.ModelViewSet):\n    queryset = Student.objects.all()\n    serializer_class = StudentSerializer\n\n# That\'s it! This SINGLE class provides:\n# GET    /students/      → List all students\n# POST   /students/      → Create a student\n# GET    /students/1/    → Get student #1\n# PUT    /students/1/    → Update student #1\n# PATCH  /students/1/    → Partial update\n# DELETE /students/1/    → Delete student #1',
          explanation: 'ModelViewSet = 3 lines of code for a COMPLETE CRUD API. It automatically generates list, create, retrieve, update, partial_update, and destroy actions!'
        },
        {
          language: 'python',
          label: 'Adding Permissions',
          code: 'from rest_framework.permissions import IsAuthenticated, IsAdminUser\n\nclass StudentViewSet(viewsets.ModelViewSet):\n    queryset = Student.objects.all()\n    serializer_class = StudentSerializer\n    permission_classes = [IsAuthenticated]\n\n    # Custom action\n    from rest_framework.decorators import action\n\n    @action(detail=False, methods=[\'get\'])\n    def top_students(self, request):\n        \"\"\"Custom endpoint: /students/top_students/\"\"\"\n        top = Student.objects.filter(grade=\'A\').order_by(\'-score\')\n        serializer = self.get_serializer(top, many=True)\n        return Response(serializer.data)',
          explanation: 'permission_classes controls who can access. @action creates custom endpoints beyond standard CRUD. detail=False means it\'s a list action.'
        }
      ],
      keyPoints: [
        '@api_view = Simple function decorator (like Django views)',
        'APIView = Class-based (separate methods per HTTP verb)',
        'ModelViewSet = Full CRUD in 3 lines (the power move!)',
        'request.data = Parsed request body (replaces request.POST)',
        'Response() = Auto-converts to JSON',
        'permission_classes = Control who can access your API',
        '@action = Create custom endpoints beyond CRUD'
      ],
      interactiveHint: 'See the evolution: from simple @api_view to the mighty ModelViewSet — watch how code shrinks as power grows!'
    },
    {
      id: 'drf-urls',
      title: 'DRF URLs & Routers: The Automatic GPS',
      shortDescription: 'Stop writing URL patterns manually — Routers auto-generate all your API endpoints.',
      metaphor: {
        title: 'The GPS Navigation System',
        description: 'Writing URL patterns manually is like giving driving directions street by street. A DRF Router is like a GPS — you tell it the destination (ViewSet), and it automatically calculates ALL the routes: /students/, /students/1/, /students/top_students/ — no manual mapping needed.',
        icon: '🗺️'
      },
      visualType: 'drf-urls',
      content: [
        'In regular Django, you write each URL pattern manually: path(\'students/\', views.list), path(\'students/<int:pk>/\', views.detail), etc. For a CRUD API, that\'s 5-6 patterns per model — tedious and error-prone.',
        'DRF Routers solve this. Register a ViewSet with a Router, and it auto-generates ALL the URL patterns. DefaultRouter also creates a browsable API root at / that lists all your endpoints.',
        'The Router creates standard RESTful endpoints: /students/ (list + create), /students/{pk}/ (retrieve + update + destroy), and any @action endpoints. It follows REST conventions automatically.',
        'The Browsable API is a killer feature. Visit your API endpoint in a browser and DRF renders a beautiful, interactive HTML interface where you can test GET, POST, PUT, DELETE — no Postman needed!'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Manual URLs (The Old Way)',
          code: '# urls.py — Writing every URL manually 😫\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path(\'students/\', views.student_list),           # GET, POST\n    path(\'students/<int:pk>/\', views.student_detail), # GET, PUT, DELETE\n    path(\'teachers/\', views.teacher_list),\n    path(\'teachers/<int:pk>/\', views.teacher_detail),\n    path(\'subjects/\', views.subject_list),\n    path(\'subjects/<int:pk>/\', views.subject_detail),\n    # ... tedious for every model!\n]',
          explanation: 'Without routers, you need 2 URL patterns per model (list + detail). For 10 models, that\'s 20+ URLs. Boring and error-prone.'
        },
        {
          language: 'python',
          label: 'Router URLs (The DRF Way)',
          code: '# urls.py — Let the Router do the work! 🚀\nfrom rest_framework.routers import DefaultRouter\nfrom . import views\n\nrouter = DefaultRouter()\nrouter.register(r\'students\', views.StudentViewSet)\nrouter.register(r\'teachers\', views.TeacherViewSet)\nrouter.register(r\'subjects\', views.SubjectViewSet)\n\nurlpatterns = router.urls\n\n# Auto-generated endpoints:\n# /students/           → GET (list), POST (create)\n# /students/{pk}/      → GET, PUT, PATCH, DELETE\n# /teachers/           → GET, POST\n# /teachers/{pk}/      → GET, PUT, PATCH, DELETE\n# /subjects/           → GET, POST\n# /subjects/{pk}/      → GET, PUT, PATCH, DELETE\n# /                    → API Root (browsable index)',
          explanation: 'Three register() calls replace 6+ manual URL patterns. DefaultRouter also creates a browsable API root page at /.'
        },
        {
          language: 'python',
          label: 'Project-Level urls.py',
          code: '# school_project/urls.py\nfrom django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path(\'admin/\', admin.site.urls),\n    path(\'api/\', include(\'school.urls\')),    # All API under /api/\n]\n\n# Now your endpoints are:\n# /api/students/\n# /api/teachers/\n# /api/subjects/\n# /api/              → Browsable API Root',
          explanation: 'Use include() at the project level to namespace all API routes under /api/. Same pattern as regular Django URL includes.'
        }
      ],
      keyPoints: [
        'DefaultRouter = Auto-generates all CRUD URL patterns',
        'router.register(prefix, viewset) = Register a ViewSet',
        'router.urls = All auto-generated URL patterns',
        'API Root = Browsable index page listing all endpoints',
        'Browsable API = Built-in HTML test interface in the browser',
        'REST convention: /resource/ (list) + /resource/{pk}/ (detail)',
        'Use include(\'app.urls\') to namespace under /api/'
      ],
      interactiveHint: 'See the Router magic: register a ViewSet and watch all the URL patterns appear automatically!'
    },
    {
      id: 'drf-school',
      title: 'School Management API: The Full Picture',
      shortDescription: 'A complete worked example — Student, Teacher, Subject, Classroom — tying all DRF concepts together.',
      metaphor: {
        title: 'Building the Entire School',
        description: 'We\'ve learned the tools: Serializers (currency exchange), ViewSets (super-receptionist), Routers (GPS). Now we build the entire school system — Models define the blueprint, Serializers translate data, ViewSets handle requests, and Routers connect everything. One complete, working API.',
        icon: '🏫'
      },
      visualType: 'drf-school',
      content: [
        'Let\'s tie everything together with a real-world School Management API. We\'ll have four models: Student, Teacher, Subject, and Classroom — each with relationships between them.',
        'The workflow is always the same: (1) Define Models in models.py, (2) Create Serializers in serializers.py, (3) Build ViewSets in views.py, (4) Register with Router in urls.py. This "Model → Serializer → ViewSet → Router" pipeline is the DRF golden pattern.',
        'With relationships, DRF can show nested data. A Classroom serializer can include its students and teacher as nested objects, or just show their IDs. You control the depth and detail.',
        'Check the drf_school_management/ folder in this project for the complete, runnable code. You can clone it, install dependencies, run migrations, and have a working API in under 2 minutes!'
      ],
      codeExamples: [
        {
          language: 'python',
          label: 'Models — The Blueprint',
          code: '# school/models.py\nfrom django.db import models\n\nclass Teacher(models.Model):\n    name = models.CharField(max_length=100)\n    email = models.EmailField(unique=True)\n    subject_expertise = models.CharField(max_length=100)\n\n    def __str__(self):\n        return self.name\n\nclass Subject(models.Model):\n    name = models.CharField(max_length=100)\n    code = models.CharField(max_length=10, unique=True)\n    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, related_name=\'subjects\')\n\n    def __str__(self):\n        return f\"{self.code} - {self.name}\"\n\nclass Classroom(models.Model):\n    name = models.CharField(max_length=50)\n    grade = models.CharField(max_length=10)\n    class_teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)\n\n    def __str__(self):\n        return self.name\n\nclass Student(models.Model):\n    name = models.CharField(max_length=100)\n    roll_number = models.CharField(max_length=20, unique=True)\n    email = models.EmailField(blank=True)\n    classroom = models.ForeignKey(Classroom, on_delete=models.SET_NULL, null=True, related_name=\'students\')\n    subjects = models.ManyToManyField(Subject, blank=True, related_name=\'students\')\n\n    def __str__(self):\n        return f\"{self.roll_number} - {self.name}\"',
          explanation: 'Four interconnected models: Teacher teaches Subjects, Classroom has a class teacher and Students, Students enroll in multiple Subjects (Many-to-Many).'
        },
        {
          language: 'python',
          label: 'Serializers — The Translators',
          code: '# school/serializers.py\nfrom rest_framework import serializers\nfrom .models import Student, Teacher, Subject, Classroom\n\nclass TeacherSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Teacher\n        fields = \'__all__\'\n\nclass SubjectSerializer(serializers.ModelSerializer):\n    teacher_name = serializers.CharField(\n        source=\'teacher.name\', read_only=True\n    )\n    class Meta:\n        model = Subject\n        fields = [\'id\', \'name\', \'code\', \'teacher\', \'teacher_name\']\n\nclass ClassroomSerializer(serializers.ModelSerializer):\n    student_count = serializers.SerializerMethodField()\n    class Meta:\n        model = Classroom\n        fields = [\'id\', \'name\', \'grade\', \'class_teacher\', \'student_count\']\n\n    def get_student_count(self, obj):\n        return obj.students.count()\n\nclass StudentSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Student\n        fields = \'__all__\'',
          explanation: 'Each model gets a serializer. Notice the extras: teacher_name uses source= to pull related data, student_count uses SerializerMethodField for computed values.'
        },
        {
          language: 'python',
          label: 'ViewSets — The Controllers',
          code: '# school/views.py\nfrom rest_framework import viewsets\nfrom .models import Student, Teacher, Subject, Classroom\nfrom .serializers import (\n    StudentSerializer, TeacherSerializer,\n    SubjectSerializer, ClassroomSerializer\n)\n\nclass StudentViewSet(viewsets.ModelViewSet):\n    queryset = Student.objects.all()\n    serializer_class = StudentSerializer\n\nclass TeacherViewSet(viewsets.ModelViewSet):\n    queryset = Teacher.objects.all()\n    serializer_class = TeacherSerializer\n\nclass SubjectViewSet(viewsets.ModelViewSet):\n    queryset = Subject.objects.all()\n    serializer_class = SubjectSerializer\n\nclass ClassroomViewSet(viewsets.ModelViewSet):\n    queryset = Classroom.objects.all()\n    serializer_class = ClassroomSerializer',
          explanation: 'Four ViewSets, each just 3 lines! ModelViewSet gives you full CRUD for each model. That\'s 24 API endpoints from 12 lines of code.'
        },
        {
          language: 'python',
          label: 'URLs — The Router',
          code: '# school/urls.py\nfrom rest_framework.routers import DefaultRouter\nfrom . import views\n\nrouter = DefaultRouter()\nrouter.register(r\'students\', views.StudentViewSet)\nrouter.register(r\'teachers\', views.TeacherViewSet)\nrouter.register(r\'subjects\', views.SubjectViewSet)\nrouter.register(r\'classrooms\', views.ClassroomViewSet)\n\nurlpatterns = router.urls\n\n# Auto-generated: 8 URL patterns!\n# /api/students/       /api/students/{pk}/\n# /api/teachers/       /api/teachers/{pk}/\n# /api/subjects/       /api/subjects/{pk}/\n# /api/classrooms/     /api/classrooms/{pk}/',
          explanation: 'Four register() calls = complete API routing. Visit /api/ in the browser to see all endpoints listed!'
        }
      ],
      keyPoints: [
        'The DRF Golden Pattern: Model → Serializer → ViewSet → Router',
        'ModelViewSet + ModelSerializer = Full CRUD in minimal code',
        'source=\'related.field\' pulls data from related models',
        'SerializerMethodField = Add computed/calculated fields',
        'DefaultRouter auto-generates all endpoints',
        'Check drf_school_management/ folder for the complete runnable project',
        '4 models × 6 operations = 24 API endpoints from ~50 lines of code'
      ],
      interactiveHint: 'Follow the pipeline: Model → Serializer → ViewSet → Router — see how each component connects!'
    }
  ]
};
