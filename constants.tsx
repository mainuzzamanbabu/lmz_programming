
import { Curriculum } from './types';

export const CURRICULUM: Curriculum = {
  concepts: [
    {
      id: 'variables',
      title: 'Variables: The Boxes of Memory',
      shortDescription: 'Think of variables as named boxes where you can store things for later.',
      metaphor: {
        title: 'The Storage Box',
        description: 'Imagine you have many identical boxes. You put a label on one called "PlayerScore" and put the number 10 inside. Later, you can look for the box labeled "PlayerScore" to see what is inside.',
        icon: '📦'
      },
      visualType: 'variable',
      snippets: [
        {
          language: 'javascript',
          code: 'let playerScore = 10;\nplayerScore = 15; // Changing value',
          explanation: 'In JS, "let" means we are creating a box that can change its content later.'
        },
        {
          language: 'python',
          code: 'player_score = 10\nplayer_score = 15',
          explanation: 'Python is simpler: just give the box a name and put something in it!'
        }
      ],
      useCases: [
        'Storing a username',
        'Keeping track of game lives',
        'Saving the price of an item in a cart'
      ]
    },
    {
      id: 'strings',
      title: 'Strings: The Bead Necklace',
      shortDescription: 'Strings are just chains of characters (text) put together.',
      metaphor: {
        title: 'The Bead Necklace',
        description: 'Think of each letter as a bead. You string them together to make a word or a sentence. If you remove one bead, the word changes.',
        icon: '📿'
      },
      visualType: 'string',
      snippets: [
        {
          language: 'javascript',
          code: 'const name = "Alice";\nconst greet = `Hello, ${name}`;',
          explanation: 'JS uses backticks `` for "Template Literals" to easily mix text and variables.'
        },
        {
          language: 'python',
          code: 'name = "Alice"\ngreet = f"Hello, {name}"',
          explanation: 'Python uses "f-strings" (formatted strings) with an "f" before the quotes.'
        }
      ],
      useCases: [
        'Displaying a welcome message',
        'Storing an email address',
        'Writing a blog post title'
      ]
    },
    {
      id: 'booleans',
      title: 'Booleans: The Light Switch',
      shortDescription: 'A simple data type that can only be True or False.',
      metaphor: {
        title: 'The Light Switch',
        description: 'A switch can only be ON or OFF. There is no middle ground. In code, this is used for yes/no questions.',
        icon: '💡'
      },
      visualType: 'boolean',
      snippets: [
        {
          language: 'javascript',
          code: 'const isDarkMode = true;\nconst isLoggedIn = false;',
          explanation: 'JS uses lowercase "true" and "false".'
        },
        {
          language: 'python',
          code: 'is_dark_mode = True\nis_logged_in = False',
          explanation: 'Python uses capitalized "True" and "False". Don\'t forget the capital letter!'
        }
      ],
      useCases: [
        'Checking if a user is an admin',
        'Knowing if a game is over',
        'Seeing if a checkbox is ticked'
      ]
    },
    {
      id: 'io',
      title: 'I/O: The Post Office',
      shortDescription: 'Input is how your program gets data, and Output is how it gives it back.',
      metaphor: {
        title: 'The Letter Exchange',
        description: 'Input is like receiving a letter from a friend (user). Output is like writing back and putting it in their mailbox. It is the conversation between human and machine.',
        icon: '📮'
      },
      visualType: 'io',
      snippets: [
        {
          language: 'javascript',
          code: 'const name = prompt("What is your name?");\nconsole.log("Hello " + name);',
          explanation: 'JS uses "prompt" for quick input in browsers and "console.log" to output text.'
        },
        {
          language: 'python',
          code: 'name = input("What is your name? ")\nprint(f"Hello {name}")',
          explanation: 'Python uses the simple "input()" and "print()" functions.'
        }
      ],
      useCases: [
        'Asking a user for their age',
        'Printing a receipt at the end of a transaction',
        'Saving a high score to a file'
      ]
    },
    {
      id: 'conditionals',
      title: 'Conditionals: The Crossroads',
      shortDescription: 'The "If/Else" logic that lets programs make decisions.',
      metaphor: {
        title: 'The Traffic Light',
        description: 'If the light is GREEN, you go. Else, if the light is RED, you stop. Programs use this "branching" logic to decide what to do next.',
        icon: '🚦'
      },
      visualType: 'conditional',
      snippets: [
        {
          language: 'javascript',
          code: 'if (light === "green") {\n  go();\n} else {\n  stop();\n}',
          explanation: 'JS uses parentheses () for the test and curly braces {} for the actions.'
        },
        {
          language: 'python',
          code: 'if light == "green":\n    go()\nelse:\n    stop()',
          explanation: 'Python uses a colon : and indentation (spaces) to group the actions.'
        }
      ],
      useCases: [
        'Checking if a password is correct',
        'Seeing if a player has enough gold to buy an item',
        'Hiding/showing content based on login status'
      ]
    },
    {
      id: 'loops',
      title: 'Loops: The Hamster Wheel',
      shortDescription: 'Doing the same task over and over again until you are finished.',
      metaphor: {
        title: 'Chopping Vegetables',
        description: 'While you still have carrots on the table, keep chopping. Once there are no carrots left, you stop. Loops automate repetitive tasks.',
        icon: '🔁'
      },
      visualType: 'loop',
      snippets: [
        {
          language: 'javascript',
          code: 'for (let i = 0; i < 5; i++) {\n  console.log("Cooking...");\n}',
          explanation: 'The JS "for" loop: start at 0, go while less than 5, add 1 each time.'
        },
        {
          language: 'python',
          code: 'for i in range(5):\n    print("Cooking...")',
          explanation: 'Python makes it readable: "for every i in the range of 5..."'
        }
      ],
      useCases: [
        'Sending an email to 1000 customers',
        'Displaying every item in a shopping list',
        'Processing every frame in a video'
      ]
    },
    {
      id: 'arrays',
      title: 'Arrays & Lists: The Train',
      shortDescription: 'A single object that holds multiple items in a specific order.',
      metaphor: {
        title: 'The Train Cars',
        description: 'Imagine a train. Each car has a number (index) starting from 0. The first car is 0, the second is 1. You can put different things in each car.',
        icon: '🚂'
      },
      visualType: 'array',
      snippets: [
        {
          language: 'javascript',
          code: 'const colors = ["Red", "Blue", "Green"];\nconsole.log(colors[0]); // "Red"',
          explanation: 'JS calls these "Arrays". We use square brackets [] to create them.'
        },
        {
          language: 'python',
          code: 'colors = ["Red", "Blue", "Green"]\nprint(colors[0]) # "Red"',
          explanation: 'Python calls these "Lists". They work almost exactly like JS arrays!'
        }
      ],
      useCases: [
        'Storing a list of top scores',
        'Managing a deck of cards',
        'A playlist of songs'
      ]
    },
    {
      id: 'functions',
      title: 'Functions: The Cooking Recipe',
      shortDescription: 'A saved block of code you can use whenever you need it.',
      metaphor: {
        title: 'The Magic Juicer',
        description: 'You put fruit in, the machine does the work, and juice comes out. You don\'t need to know how the machine works every time; you just push the button.',
        icon: '🥤'
      },
      visualType: 'function',
      snippets: [
        {
          language: 'javascript',
          code: 'function makeJuice(fruit) {\n  return fruit + " Juice";\n}\n\nmakeJuice("Apple");',
          explanation: 'We "define" it with function and "call" it with its name.'
        },
        {
          language: 'python',
          code: 'def make_juice(fruit):\n    return f"{fruit} Juice"\n\nmake_juice("Apple")',
          explanation: 'Python uses "def" (for define) and snake_case for names.'
        }
      ],
      useCases: [
        'Calculating the tax on a price',
        'Sending a message to a user',
        'Saving game progress'
      ]
    },
    {
      id: 'classes',
      title: 'Classes: The Blueprint',
      shortDescription: 'A template used to create many similar "objects".',
      metaphor: {
        title: 'The Architectural Blueprint',
        description: 'A blueprint is just a drawing of a house. It is not a real house you can live in. But you can use that ONE blueprint to build 100 real houses.',
        icon: '🏗️'
      },
      visualType: 'class',
      snippets: [
        {
          language: 'javascript',
          code: 'class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\nconst myDog = new Dog("Buddy");',
          explanation: 'The class "Dog" is the blueprint. "new Dog()" creates a real dog object.'
        },
        {
          language: 'python',
          code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\nmy_dog = Dog("Buddy")',
          explanation: 'Python uses "__init__" to set up the new object when it is built.'
        }
      ],
      useCases: [
        'Creating different types of enemies in a game',
        'Designing a "User" template for a social app',
        'Handling "Products" in an e-commerce site'
      ]
    },
    {
      id: 'inheritance',
      title: 'Inheritance: The Family Tree',
      shortDescription: 'Allowing one class to take all the features of another class.',
      metaphor: {
        title: 'Family Traits',
        description: 'If the "Animal" class can breathe, then the "Bird" class inherits breathing automatically. You don\'t have to write the code for breathing twice!',
        icon: '🌳'
      },
      visualType: 'inheritance',
      snippets: [
        {
          language: 'javascript',
          code: 'class Bird extends Animal {\n  fly() {\n    console.log("Flap flap!");\n  }\n}',
          explanation: '"extends" means Bird is a more specific type of Animal.'
        },
        {
          language: 'python',
          code: 'class Bird(Animal):\n    def fly(self):\n        print("Flap flap!")',
          explanation: 'Putting the parent class in parentheses signifies inheritance.'
        }
      ],
      useCases: [
        'Making a "PaidUser" that has everything a "User" has, plus premium features',
        'Creating different types of bank accounts (Savings vs Checking)',
        'Designing character classes in RPGs (Warrior inherits from Hero)'
      ]
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation: The TV Remote',
      shortDescription: 'Hiding complex internal details and only showing what is necessary.',
      metaphor: {
        title: 'The Remote Control',
        description: 'You press "Volume Up" on your remote. You don\'t see the radio waves or the electrical circuits inside. The complexity is "encapsulated" inside the remote.',
        icon: '🛡️'
      },
      visualType: 'encapsulation',
      snippets: [
        {
          language: 'javascript',
          code: 'class BankAccount {\n  #balance = 0; // Private variable\n  deposit(amount) {\n    this.#balance += amount;\n  }\n}',
          explanation: 'The "#" makes a variable private so nobody can touch the balance directly.'
        },
        {
          language: 'python',
          code: 'class BankAccount:\n    def __init__(self):\n        self.__balance = 0\n    def deposit(self, amt):\n        self.__balance += amt',
          explanation: 'Double underscores "__" signal that this data is private to the class.'
        }
      ],
      useCases: [
        'Protecting a user\'s password from being accessed directly',
        'Hiding complex engine logic in a game character',
        'Keeping data safe from accidental changes'
      ]
    },
    {
      id: 'polymorphism',
      title: 'Polymorphism: The Multi-tool',
      shortDescription: 'One name for a function that works differently for different objects.',
      metaphor: {
        title: 'The Universal "Play" Button',
        description: 'Think of a "Play" button. If you are on Spotify, it plays music. If you are on YouTube, it plays video. One button name, many different behaviors.',
        icon: '🧬'
      },
      visualType: 'polymorphism',
      snippets: [
        {
          language: 'javascript',
          code: 'dog.makeSound(); // "Woof"\ncat.makeSound(); // "Meow"',
          explanation: 'Both have a function called "makeSound", but they perform it differently.'
        },
        {
          language: 'python',
          code: 'for animal in [dog, cat]:\n    animal.make_sound()',
          explanation: 'We can treat different objects as the same because they share a method name.'
        }
      ],
      useCases: [
        'A "CalculateTax" function that works for different countries',
        'A "Render" function that works for both 2D and 3D shapes',
        'A "Pay" method that works with Credit Card or PayPal'
      ]
    }
  ]
};
