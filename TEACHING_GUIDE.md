# Learn with MZ: Interactive Teaching Guide

Welcome! Use this guide to type along in your editor. We'll start with the basics and move into Python for Object-Oriented Programming (OOP).

---

## 1. Variables & Numbers (The Boxes)
Every program needs to remember things.

```javascript
// JavaScript
let age = 25;          // An integer
let price = 19.99;     // A float (number with decimals)
let score = 0;

score = score + 10;    // Changing the value
console.log(score);
```

---

## 2. Strings & Lists (Text & Collections)
```javascript
// JavaScript
let name = "MZ";
let greeting = `Hello, ${name}!`; // Template literal

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
```

---

## 3. Logic: Booleans & Conditionals
```javascript
// JavaScript
let isHappy = true;

if (isHappy) {
    console.log("Keep smiling!");
} else {
    console.log("Hope things get better!");
}
```

---

## 4. Loops (Repetition)
```python
# Python
for i in range(3):
    print("Step number", i)
```

---

## 5. Functions (The Magic Machine)
```python
# Python
def greet_user(username):
    return f"Welcome to the team, {username}!"

message = greet_user("Alice")
print(message)
```

---

## 6. OOP with Python (The Blueprint)

### A. Classes & Objects
```python
class Robot:
    def __init__(self, name):
        self.name = name
    
    def say_hello(self):
        print(f"Bleep Bloop! I am {self.name}.")

my_robot = Robot("MZ-Bot")
my_robot.say_hello()
```

### B. Inheritance (Family Tree)
```python
class FlyingRobot(Robot):
    def fly(self):
        print(f"{self.name} is taking off! 🚀")

drone = FlyingRobot("SkyEye")
drone.say_hello() # Inherited
drone.fly()       # Specific to FlyingRobot
```

### C. Encapsulation (Hiding Complexity)
```python
class BankAccount:
    def __init__(self):
        self.__balance = 100 # Private (hidden)

    def show_balance(self):
        print(f"Your balance is: ${self.__balance}")

account = BankAccount()
account.show_balance()
# account.__balance # This would cause an error!
```

---

## Teaching Tips 💡
1. **Type it out character by character**: Don't copy-paste. Let them see the syntax errors happen.
2. **Predict the output**: Before running, ask "What do you think happens now?"
3. **Break it**: Change a `+` to a `-` or remove a colon to see the errors.
