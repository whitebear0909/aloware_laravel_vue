## install dependencies

Run below commands

```
composer install
npm install
```

## project setup

-   Rename .env.example -> .env
-   Create database with name 'nextbasket'
-   Run below commands

```
php artisan key:generate
php artisan migrate
php artisan db:seed
```

## To Run

```
php artisan serve
npm run watch
```

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.