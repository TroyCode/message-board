#!/bin/bash
mkdir -p /opt
cd /opt

yum update

# install nodejs
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
yum -y install nodejs

# replace {S3 PATH} to real path
aws s3 cp {S3 PATH} .
tar -zxvf message-board.tar.gz
rm message-board.tar.gz
cd message-board

node start.js