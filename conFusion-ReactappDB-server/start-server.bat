@ECHO OFF
Title conFusion JSON-Server
:: ECHO Port should be between 0 and 65536
:: SET /P port="Enter PORT to start server on: "
ECHO.
ECHO Starting conFusion JSON-Server on PORT: 3001
ECHO (use ctrl+c to stop server)
ECHO starting server at http://localhost:3001/
START "" http://localhost:3001/

ECHO ==============================================
json-server --watch db.json -p 3001 -d 2000
PAUSE
