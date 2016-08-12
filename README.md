# augmented-melbourne

# Requirements
* npm
* gulp

# NB: dev on windows
* Grab NVM from https://github.com/coreybutler/nvm-windows/releases
* download and install the latest version.
* Reboot
```bash
  nvm install latest
  nvm on
```

add `path/to/this/repo/nvm-workaround.bat` to your PATH variable (via control panel)
# Installation
```bash
  git clone https://github.com/H-Plus-Time/augmented-melbourne.git
  cd augmented-melbourne
```

# Development
On Linux: 
```bash
  gulp dev
```

On Windows:
Once you're in the repository
```bash
    .\node_modules\.bin\gulp dev
```

If gulp setup isn't working properly, and you have python3 installed, run:
```bash
    python -m http.server
```
or, for python2
```bash
    python -m SimpleHTTPServer