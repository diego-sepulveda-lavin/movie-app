# The movie app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### If you wish to see a running version of the app, you can visit the [vercel deployment](https://movie-app-rust-sigma.vercel.app/)

## Instruccions

First you should clone or fork the following repository:

```console
git clone https://github.com/diego-sepulveda-lavin/movie-app.git
```

Once is done, go to the movie-app folder

```console
cd movie-app
```

Now, create a copy of the file .env.example and rename it to .env

```console
cp .env.example .env
```

Replace the REACT_APP_API_KEY variable with a valid API key and save the file

**Note: You should avoid using secret API keys through .env files, due once compiled, they are included in the js code. You can hide the API key behind your own backend service.**

```console
REACT_APP_API_KEY=not_safe_apikey
```

Now, you can install the proyect's dependencies

```console
npm install
```

Finally, you can start the server locally

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```console
npm run start
```

## Comments

1. This proyect was done between Saturday 30th October and Sunday 31st October.
2. No state management besides useState was used (E.g. Redux or contexAPI), due app simplicity. It could have helped to maintain state between views, but I considered a overkill.
3. TSX was used instead of JSX
4. Due to time limit, no testing was added.
5. The app is responsive.
