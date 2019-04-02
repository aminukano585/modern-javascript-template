# modern-javascript-template
An overly simplified modern JavaScript environment template.

## Setup

1. Clone the repo, and cleverly rename things to suit your project
```
git clone git@github.com:AminuSufi585/modern-javascript-template.git
```

2. Install dependencies 
```
npm install
```

3. Start the project
```
npm start
```

**NOTE:** 

To use environmet variables, and secret keys at the client side, you need to create `.env` file:
```
touch .env
```

Then add the secret keys in `.env`:
```
SECRET_KEY='6yyfbiuu5t34b#$@fi4uiu83o4y8'
```

Access it in the client side `app/index.js`:
```
console.log(process.env.SECRET_KEY);
```

### Improve the template, and make it better :)