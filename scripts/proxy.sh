#!/bin/bash

echo 'proxy:'
git config --global http.https://github.com.proxy http://127.0.0.1:10080
git config --global https.https://github.com.proxy https://127.0.0.1:10080
