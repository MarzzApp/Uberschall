# Überschall
 Hella lightweight and informative logging system for node

Überschall means supersonic in German, and as to why I chose this name, idk it sounded kinda cool

Überschall provides a centralized and organized way to easily log crucial data in a way that is concise and informative

## Installation:

After you've installed the package via NPM, it's time to require it in your project file(s);

We reccomend: 
```javascript
const uber = require('uberschall');
```

## Usage:

To make a general log message (similar to a regular `console.log()`):

```javascript
    uber.logGeneral({
        msg: "Hi, I'm the message that'll be logged!",
        origin: "I'm where the log message came from, ex. a certain server endpoint",
        logTime: true, /* When this is set to true, a timestamp will be appended to your log message */
    })
```
Output: `[25/8/2020 15:22] | [ FROM: I'm where the log message came from, ex. a certain server endpoint ] "Hi, I'm the message that'll be logged!"`

### Parameter overview

At the moment Überschall takes in three parameters, `msg` (string), `origin` (string), and `logTime` (boolean).

`msg` is the *only* required parameter, the rest are optional but recommended!
