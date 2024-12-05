# Express.js: Silent Failure on Empty JSON Request Body

This repository demonstrates a subtle bug in an Express.js application where an empty JSON request body leads to unexpected behavior.  The server does not throw an error but instead processes an empty object, making it hard to identify the issue.

## Bug Description

The provided Express.js application accepts POST requests to the `/data` endpoint. When an empty JSON body is sent, the server silently logs an empty object instead of providing a clear error message, potentially leading to unexpected application behavior and making debugging difficult.

## Solution

The solution involves adding error handling to explicitly check for empty request bodies and responding accordingly with a more informative error message.