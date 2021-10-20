#!/usr/bin/env bash

docker run --rm --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p5432:5432 -d postgres:13.4-alpine
