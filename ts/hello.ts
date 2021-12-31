/*
    ts 세팅과정
    1. scoop 설치 - 파워셀 관리자모드에서 열고
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    $env:SCOOP='C:\sCOOP'
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    scoop install aria2
    scoop install git
    scoop update * - 그간의 업데이트 사항들이 업데이트 됨

    2. vscode설치
    scoop bucket add extras
    scoop install vscode
    설치 후 C:\sCOOP\apps\vscode\current에 들어가서 install-context.reg 실행

    3. node 설치
    scoop install nodejs-lts
    node -v node 버전 확인

    4. 크롬설치
    scoop install chromium

    5. 타입스크립트 설치
    npm i -g typescript
    tsc -v 버전확인

    6. touch 설치
    scoop install touch

    7. vscode 실행 후 파일 설치
    tsc /*
    ts 세팅과정
    1. scoop 설치 - 파워셀 관리자모드에서 열고
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    $env:SCOOP='C:\sCOOP'
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    scoop install aria2
    scoop install git
    scoop update * - 그간의 업데이트 사항들이 업데이트 됨

    2. vscode설치
    scoop bucket add extras
    scoop install vscode
    설치 후 C:\sCOOP\apps\vscode\current에 들어가서 install-context.reg 실행

    3. node 설치
    scoop install nodejs-lts
    node -v node 버전 확인

    4. 크롬설치
    scoop install chromium

    5. 타입스크립트 설치
    npm i -g typescript
    tsc -v 버전확인

    6. touch 설치
    scoop install touch

    7. tsc 파일생성

    8. node hello.js

    9.ts-node tjfcl
    npm i -g ts-node
    ts-node hello.ts 파일실행

*/
