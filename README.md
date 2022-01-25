# Dnd-5e-character-builder
A DnD 5e character builder. Choose your character's race, class, proficiencies, spells and more.
## Installation
You can clone the repository to a path of your choice or donwload the zip file and then extract it.
```
https://github.com/rborges13795/Dnd-5e-character-builder.git
```
## Configuration
- First thing that needs to be done is to change the `.env.example` file to just `.env` and add a string to `APP_SECRET`.
- Finally, run composer install with
```
composer install 
```
### Usage
Initiate your server and check the routes in /config/routes.yaml and copy the path under 'index'. From there you can start to build your character starting with the race, although
you can choose the class or scores if you prefer. This web app uses sessions to store your choices to make up the summary of your character at the summary page.
To initiate a server:
```
php -S localhost:8080 -t public
```
## The Data
This app uses the dnd-5e-wrapper that I made of the 'Dungeons and Dragons 5th Edition REST API v1' api. 
You can find the api [here](https://www.programmableweb.com/api/dungeons-and-dragons-5th-edition-rest-api-v1) and the wrapper [here](https://github.com/rborges13795/dnd-5e-wrapper).
## Requirements
- PHP >= 7.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
