@ECHO OFF
Title conFusion JSON-Server
ECHO Port should be between 0 and 65536
SET /P port="Enter PORT to start server on: "
ECHO.
ECHO Starting conFusion JSON-Server on PORT: %port%
ECHO (use ctrl+c to stop server)	
ECHO ==============================================
json-server --watch db.json -p %port% -d 2000
PAUSE
