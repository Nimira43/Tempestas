# Tempestas 
#### by NimiraTech
#### A JavaScript weather app using the OpenWeather API
#### https://openweathermap.org

## Subjects Covered
#### 1. Closures
###### Closures were used within the WeatherApp class, where inner functions like handleSearch have access to variables defined in the outer function's scope.

#### 2. Promises and Async/Await
###### Asynchronous operations were managed with async/await in functions like fetchWeather and handleSearch to handle API calls and ensure proper flow control.

#### 3. Prototypes and Inheritance
###### JavaScript’s prototype-based inheritance was utilised implicitly within the class structure. The WeatherApp class encapsulates all functionalities, showing how prototypes can be effectively used to organise code.

#### 4. Modules
###### The project structure made use of ES6 modules. fetchWeather was exported from weatherApi.js and imported in script.js, demonstrating modular coding.

#### 5. Functional Programming
###### I employed functional programming techniques like using Set for managing favourites and array methods like forEach to iterate over items.

#### 6. Event Loop and Asynchronous Programming
###### Understanding the event loop is critical in JavaScript, especially when handling asynchronous operations. By using async/await and Promises, we ensured that API calls didn’t block the main thread, allowing the app to remain responsive.

## Final Thoughts
#### Dynamic User Interface 
###### By manipulating the DOM to update the weather results and favourites list dynamically.

#### Error Handling 
###### Both client-side and server-side error handling to provide informative feedback and debugging.

#### LocalStorage 
###### To persist our data across sessions, enhancing the user experience.
