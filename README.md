## install dependencies

Run below commands

```
composer install
npm install
```

## project setup

-   Rename .env.example -> .env
-   Create database with name 'aloware'
-   Run below commands

```
php artisan key:generate
php artisan migrate
```

## To Run

```
php artisan serve
npm run watch
```

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### - Backend(Laravel)

- App/Http/Controllers/CommentController.php

    ```
    index(): getting all comments
    postComment(): create comment
    ```
- Api Router

  ```
  Route::get('/comments', [CommentController::class, 'index']);
  Route::post('/comments', [CommentController::class, 'postComment']);
  ```

### - Frontend(Vue)

- resources/js/views -> main page vue components
- resources/js/service/axios.service.js -> configure axios
- resources/store -> define store(mutation, state, action, getter)
- resources/components -> define reusable components.
- resources/routes.js -> define vue routes
- resources/sass -> define sass
