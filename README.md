# augmented-melbourne

# Requirements
* git - available at https://git-scm.com/download/win or via your package manager of choice
* npm

# dev on windows
* nvm and npm both work after installation in command prompt - your mileage may vary on powershell and git shell.
* Grab NVM from https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-setup.zip
* extract and install it.
* Reboot
```bash
  nvm install latest
  nvm on
  npm install -g bower gulp
```
* Reboot again (global npm packages change the system PATH variable, which does not propagate
changes to running programs - in this case explorer.exe - or any of its children).


# dev on linux
* install nvm - ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash```
* ensure nvm is in your path - ```source ~/.bashrc``` (or the equivalent for your shell, e.g. .zshrc)
* install node and npm - ```nvm install node```
* install bower and gulp globally (or locally as described in "Self-contained install")

# Installation
```bash
  git clone https://github.com/H-Plus-Time/augmented-melbourne.git
  cd augmented-melbourne
```

# Development
```bash
  gulp dev
```

# Self-contained install
For a self-contained installation (or as near as possible), run
```npm install -g npm-run```, and everything else as a plain local
```npm install```. Calls to gulp, bower and similar will need be
prefixed with ```npm-run```.