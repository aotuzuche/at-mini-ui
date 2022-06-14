#!/bin/bash

echo 'unproxy:'
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy
