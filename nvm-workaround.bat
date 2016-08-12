@echo off
set cmd="npm bin"
FOR /F "tokens=*" %%i IN (' %cmd% ') DO SET modules=%%i
"%modules%\%*"