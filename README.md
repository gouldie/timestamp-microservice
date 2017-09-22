Timestamp microservice. Pass a valid unix timestamp or a natural language date (example: January 1, 2016) as a URL parameter, and receive both the Unix timestamp and the natural language form of that date.

Example usage:

https://mg-timestamp.glitch.me/December%2015,%202015 

https://mg-timestamp.glitch.me/1450137600

Example output:

{ "unix": 1450137600, "natural": "Sat, 17 Jan 1970 18:48:57 GMT" }