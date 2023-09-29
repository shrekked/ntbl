# NTBL // NOTABLE

NTBL is a simple CLI note-takeing app.

## Description

NTBL is a Node.js CLI which allows you to take notes from your terminal, saves them in a local database, and creates a simple web server to display your notes.

## Getting Started

### Dependencies

Node 18.8.0

### Installing

* Check out this repo
* CD into the ntbl directory and run `npm install`
* Run `npm link` from within the ntbl directory
* Run `note` in your terminal to ensure the CLI is installed and working correctly

### Executing program

The following commands and options can be ran from your terminal.

```
note <command>

Commands:
  note new <note>     create a new note
  note all            get all notes
  note find <filter>  get matching notes
  note remove <id>    remove a note by id
  note web [port]     launch website to see notes
  note clean          remove all notes

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -t, --tags     tags to add to the note                                [string]
```

## Help

```
note help
```

## Authors

[Evan Crumpecker](https://evancrumpecker.com)

## Version History

* 1.0.0
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

[Scott Moss](https://scottmoss.notion.site/scottmoss/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c)
* [FrontendMasters](https://frontendmasters.com/)