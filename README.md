# Homework #1 goit-node-cli - Node.js CLI Application

This is a simple Node.js CLI application for managing contacts. It allows you to
list, get, add, and remove contacts.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nickunderhill/goit-node-cli.git
   cd goit-node-cli
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

You can use the following commands to interact with the application:

### List all contacts

```sh
node src/index.js -a list
```

### Get a contact by ID

```
node src/index.js -a get -i <contact-id>
```

### Add a new contact

node src/index.js -a add -n <name> -e <email> -p <phone>

### Remove a contact by ID

node src/index.js -a remove -i <contact-id>

### Options

```
-a, --action <type>: Choose action (list, get, add, remove)
-i, --id <type>: User ID
-n, --name <type>: User name
-e, --email <type>: User email
-p, --phone <type>: User phone
```

###

Example

```
node src/index.js -a add -n "John Doe" -e "john.doe@example.com" -p "123-456-7890"
```
