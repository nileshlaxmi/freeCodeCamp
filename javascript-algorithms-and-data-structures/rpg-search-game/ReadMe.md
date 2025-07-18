# **Build an RPG Creature Search App**

In this project, you'll build an app that will search for creatures from an RPG game by name or ID and display the results to the user. To retrieve the creature data and images, you'll use freeCodeCamp's [<u>RPG Creature API</u>](https://rpg-creature-api.freecodecamp.rocks/).

**Note:** The first 13 steps must be completed inside the `index.html` file.

**Objective:** Build an app that is functionally similar to [<u>https://rpg-creature-search-app.freecodecamp.rocks</u>](https://rpg-creature-search-app.freecodecamp.rocks).

**User Stories:**

 1. You should have an `input` element with an `id` of `"search-input"`, and is required.
 2. You should have a `button` element with an `id` of `"search-button"`.
 3. You should have an element with an `id` of `"creature-name"`.
 4. You should have an element with an `id` of `"creature-id"`.
 5. You should have an element with an `id` of `"weight"`.
 6. You should have an element with an `id` of `"height"`.
 7. You should have an element with an `id` of `"types"`.
 8. You should have an element with an `id` of `"hp"`.
 9. You should have an element with an `id` of `"attack"`.
10. You should have an element with an `id` of `"defense"`.
11. You should have an element with an `id` of `"special-attack"`.
12. You should have an element with an `id` of `"special-defense"`.
13. You should have an element with an `id` of `"speed"`.
14. When the `#search-input` element contains the value `Red` and the `#search-button` element is clicked, an alert should appear with the text `"Creature not found"`.
15. When the `#search-input` element contains the value `Pyrolynx` and the `#search-button` element is clicked, the values in the `#creature-name`, `#creature-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be `PYROLYNX`, `#1` or `1`, `Weight: 42` or `42`, `Height: 32` or `32`, `65`, `80`, `50`, `90`, `55`, and `100`, respectively.
16. When the `#search-input` element contains the value `Pyrolynx` and the `#search-button` element is clicked, a single element should be added within the `#types` element that contains the text `FIRE`. The `#types` element content should be cleared between searches.
17. When the `#search-input` element contains the value `2` and the `#search-button` element is clicked, the values in the `#creature-name`, `#creature-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, `#special-defense`, and `#speed` elements should be `AQUOROC`, `#2` or `2`, `Weight: 220` or `220`, `Height: 53` or `53`, `85`, `90`, `120`, `60`, `70`, and `40`, respectively.
18. When the `#search-input` element contains the value `2` and the `#search-button` element is clicked, two elements should be added within the `#types` element that contain text values `WATER` and `ROCK`, respectively. The `#types` element content should be cleared between searches.
19. When the `#search-input` element contains an invalid creature name, and the `#search-button` element is clicked, an alert should appear with the text `"Creature not found"`.
20. When the `#search-input` element contains a valid creature ID and the `#search-button` element is clicked, the UI should be filled with the correct data.