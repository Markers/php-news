# php-annotated-monthly 한글 번역
jetbrains 의 php-annotated-monthly 한글 번역 레포입니다. 

## TODO List 
 - 새로운 게시글이 추가된다면, 서버에서 jobs 를 통해 HTML 파일을 md 파일로 파싱한다. 
 - 파싱 후 영어 원본 파일을 en 디렉토리에 저장한 후 github 에 push 한다. 
 - en 디렉토리에 있는 md 파일을 kr 디렉토리에서 번역한다. 
 - merge 가 완료되면, git action 을 통해 DB 에 push 한다. 

## 특이사항 
 - API 에서 `\n`는 `<br />` 태그로 변경한다. 
 - API 에서 `\` 는 `빈값` 으로 변경한다. 
 - `<del>...</del>` 태그는 취소선이다. => md 파일로 translation 할 때 취소선 처리를 해야함. 