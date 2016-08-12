# augmented-melbourne

# Requirements
* git - available at https://git-scm.com/download/win or via your package manager of choice

# NB: dev on windows
* nvm and npm both work out of the box after installation in command prompt - your mileage may vary on powershell and git shell.
* Grab NVM from https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-setup.zip
* extract and install it.
* Reboot
```bash
  nvm install latest
  nvm on
  npm install -g bower gulp
```

# Installation
```bash
  git clone https://github.com/H-Plus-Time/augmented-melbourne.git
  cd augmented-melbourne
```

# Development
```bash
  gulp dev
```

For a self-contained installation (or as near as possible), run
```npm install -g npm-run```, and everything else as a plain local
```npm install```. Calls to gulp, bower and similar will need be
prefixed with ```npm-run```.