sudo apt-get install -y git curl libcanvas-dev libcairo-dev libjpeg-dev libgif-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash
export NVM_DIR="/home/nicholas/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install node
npm install -g bower
npm install && bower install
