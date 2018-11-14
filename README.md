# Todolist-Application-Client

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Todoing is a single page to-do application which helps users create to-do lists and organize to-dos.

## Server Repository

[Todoing-Rest-Api](https://github.com/yasinakman/Todolist-Rest_Api)

Todoing client needs the RESTful web service running on the same machine at port 8080.

## Features

- Create&delete to-do lists.
- Add items on to-do lists.
- Delete items on to-do lists.
- Mark the items in lists to done, undone or expired.
- Set create- and enddates to follow the lifecycle for the tasks.
- Set descriptions for the items.

## Installation

### For Debian based distros, Ubuntu

You need nodejs and npm installed on your system to run the project. If you don't have, go for the following commands to install. Otherwise pass this step.

```sh
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```
cd into the application directory and run the commands below. The browser will open the application on http://localhost:3000 automatically.

```sh
npm install
npm start
```

### For Windows

Download and install nodejs from https://nodejs.org/en/download/ and run the following commands in project directory:

```sh
npm install
npm start
```

## Credits
Design and programming by [Yasin Talha AKMAN](https://github.com/yasinakman).

## License
This project is licensed under the GNU General Public License v3.0 (GPL 3.0) - see the [LICENSE](LICENSE) file for details
