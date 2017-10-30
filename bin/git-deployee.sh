#!/bin/bash 
mkdir -p /opt
cd /opt

yum update

# install nodejs
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
sudo yum -y install nodejs

# clone from github
git clone -b product https://github.com/TroyCode/message-board.git
cd message-board

node start.js