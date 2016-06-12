#!/bin/sh

kill `ps -axf |grep node |grep -v grep|awk '{print $1}'` | exit 0

