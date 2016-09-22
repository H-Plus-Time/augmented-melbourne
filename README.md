# augmented-melbourne

# Requirements
* git - available at https://git-scm.com/download/win or via your package manager of choice
* npm

# dev via Docker
Grab docker - simplest option for Mac and Windows: https://kitematic.com/
For linux, head to https://docs.docker.com/engine/installation/

Open up the docker cli (there's a button in Kitematic), then:
```bash
  docker build . -t augmented-melbourne/app
```
On windows:
```bash
  docker run -d --net=host -v $(cd):/src augmented-melbourne/app ## Run in detached mode, bind container ports to host, bind current dir to /src in the container
```
On Linux/macOS:
```bash
  docker run -d --net=host -v $(pwd):/src augmented-melbourne/app
```
Navigate to localhost:3000 and you'll see the app.

# dev on windows
* nvm and npm both work after installation in command prompt - your mileage may vary on powershell and git shell.
* Grab NVM from https://github.com/coreybutler/nvm-windows/releases/download/1.1.1/nvm-setup.zip
* extract and install it.
* Reboot
```bash
  nvm install latest
  nvm on
  npm install -g bower
```
* Reboot again (global npm packages change the system PATH variable, which does not propagate
changes to running programs - in this case explorer.exe - or any of its children).


# dev on linux
* install nvm - ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash```
* ensure nvm is in your path - ```source ~/.bashrc``` (or the equivalent for your shell, e.g. .zshrc)
* install node and npm - ```nvm install node```
* ```npm install -g bower```

# Installation
```bash
  git clone https://github.com/H-Plus-Time/augmented-melbourne.git
  cd augmented-melbourne
  npm install
```

# Development
```bash
  npm run dev
```

# Self-contained install
For a self-contained installation (or as near as possible), run
```npm install -g npm-run```, and everything else as a plain local
```npm install```. Calls to gulp, bower and similar will need be
prefixed with ```npm-run```.
