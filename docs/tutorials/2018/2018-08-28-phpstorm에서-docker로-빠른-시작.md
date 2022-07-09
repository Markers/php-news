<div class="content">[기능](/phpstorm/category/features/) [튜토리얼](/phpstorm/category/tutorials/) PhpStorm에서 Docker로 빠른 시작 
==========================

<div class="post-info">![안톤 모나코프](https://blog.jetbrains.com/wp-content/uploads/2021/03/anton-200x200.jpg)<div class="post-info__text"> [안톤 모나코프](https://blog.jetbrains.com/author/antonmonakov) <time class="publish-date" data-day="28" data-month="08" data-year="2018" datetime="2018-08-28"></time></div></div> 그래서, 당신은 오늘 새로운 것을 시도하기로 결정하고 처음부터 프로젝트를 시작했습니다. 첫 번째 단계는 개발 환경을 설정하는 것입니다. 최소한 웹 서버와 PHP 인터프리터를 실행하고 싶을 것입니다(디버깅 엔진이 설치된 상태에서 선호).

 [Docker](https://www.docker.com/) 를 사용하면 몇 분 만에 코드 개발, 실행 및 디버깅을 시작할 수 있습니다!

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="281" src="https://www.youtube.com/embed/bWbXMy_mxxE?feature=oembed" title="PhpStorm에서 Docker로 빠른 시작" width="500"></iframe>

<span id="more-20773"></span>

 아마도 PhpStorm과 Docker를 통합하는 가장 쉬운 방법은 [PhpStorm Docker 레지스트리](https://hub.docker.com/r/phpstorm/) 를 사용하는 것입니다. 가장 일반적인 PHP 개발 요구 사항을 다루는 PhpStorm 팀이 선별한 사전 구성된 Docker 이미지를 제공합니다.

 계속하기 전에 컴퓨터에 Docker가 설치되어 있는지 확인하십시오. [Windows](https://docs.docker.com/docker-for-windows/install/) 및 [macOS](https://docs.docker.com/docker-for-mac/install/) 에서 Docker를 설치하는 방법을 참조하십시오.

 환경 정의
------

 시작하려면 PhpStorm에서 새 프로젝트를 만듭니다. 다음으로 앱을 구성하는 서비스 구성을 설명하는 <span class="lang:default decode:true crayon-inline ">docker-compose.yml</span> 이라는 새 파일을 만듭니다. 우리의 경우 단일 *웹 서버* 서비스가 됩니다.

```
<pre class="EnlighterJSRAW" data-enlighter-language="yaml" data-enlighter-linenumbers="false" data-enlighter-title=""> 버전: '2'
서비스:
  웹 서버:
    이미지: phpstorm/php-apache:7.4-xdebug2.9
    포트:
      - "80:80"
    볼륨:
      - ./:/var/www/html
    환경:
      XDEBUG_CONFIG: remote_host=host.docker.internal
```

  
 보시다시피 Apache 웹 서버와 Xdebug가 포함된 PHP 7.4로 구성된 사전 구성된 Docker 이미지를 사용합니다. <span class="lang:default decode:true crayon-inline">host.docker.internal</span> 값을 사용하여 원격 호스트를 참조한다는 점에 유의하십시오. [Windows용](https://docs.docker.com/docker-for-windows/networking/) [Docker 및 Mac용 Docker](https://docs.docker.com/docker-for-mac/networking/) 에서는 호스트의 내부 주소로 자동 확인되어 컨테이너에서 쉽게 연결할 수 있습니다.

 Linux 사용자를 위한 중요 사항: Linux의 <span class="lang:default decode:true crayon-inline">host.docker.internal</span> 은 현재 [지원되지 않습니다](https://github.com/docker/for-linux/issues/264) . 대신 로컬 컴퓨터의 호스트 이름을 사용해야 합니다(컴퓨터의 호스트 이름이 무엇인지 알아보려면 터미널에서 <span class="lang:default decode:true crayon-inline ">호스트 이름</span> 을 실행하기만 하면 됩니다).

 Linux에 대한 해당 환경 구성 섹션은 다음과 같습니다.

```
<pre class="EnlighterJSRAW" data-enlighter-language="yaml" data-enlighter-linenumbers="false" data-enlighter-title=""> ...
    환경:
      XDEBUG_CONFIG: remote_host=<호스트 이름>
```

  
 자세한 내용과 가능한 해결 방법은 [여기](https://github.com/docker/for-linux/issues/264) 를 참조하세요. 우리 환경은 다음과 같이 자세히 설명되어 있습니다.

![도커 작성](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-docker-compose-new.png)

 이제 전용 실행/디버그 구성을 만들어 사용을 시작할 수 있습니다.

 실행/디버그 구성 만들기
--------------

 <span class="lang:default decode:true crayon-inline ">docker-compose.yml</span> 을 마우스 오른쪽 버튼으로 클릭하고 상황에 맞는 메뉴에서 *만들기…* 를 선택합니다.

![create_docker_compose_run_config](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-create_docker_compose_run_config.png)

 열리는 대화 상자에서 구성 이름을 제공하고 변경 사항을 적용합니다.

![create_docker_compose_run_config_dialog](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-create_docker_compose_run_config_dialog.png)

 이제 도구 모음에서 구성을 시작할 수 있습니다.

![run_config_run_toolbar](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-run_config_run_toolbar.png)

 PhpStorm은 필요한 이미지를 자동으로 다운로드하고 웹 서버를 시작합니다.

![docker_start_service](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-docker_start_service-new.png)

 그게 다야: 우리는 코드를 실행하고 디버깅하기 위한 모든 준비가 되었습니다!

 코드 실행 및 디버깅
------------

 모든 것이 예상대로 작동하는지 확인합시다. 이를 위해 가장 간단한 *Hello world* PHP 파일을 만들고 [PhpStorm Zero-Configuration Debugging](https://www.jetbrains.com/help/phpstorm/zero-configuration-debugging.html) 접근 방식에 따라 디버깅을 시도합니다.

 이미 Xdebug가 설치 및 구성되어 있으므로 다음 사항만 필요합니다.

- 브라우저에 [디버깅 확장](https://www.jetbrains.com/help/phpstorm/browser-debugging-extensions.html) 을 설치하고 활성화합니다. ![chrome_debug_extension](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-chrome_debug_extension.png)
- 코드에 중단점을 설정합니다.   
    ![breakpoint_set](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-breakpoint_set.png)
- PhpStorm에서 들어오는 디버그 연결 수신을 활성화합니다. ![enable_listening_debug_connections](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-enable_listening_debug_connections.png)

 이제 브라우저에서 페이지를 열면 디버깅 세션이 자동으로 시작됩니다.

![디버깅_시작됨](https://blog.jetbrains.com/wp-content/uploads/2018/08/phpstorm-debugging_started.png)

 [PhpStorm Docker 레지스트리](https://hub.docker.com/u/phpstorm/) 를 추가로 탐색하는 것이 좋습니다. 매우 간단한 경우를 살펴보았지만 설명된 기술을 사용하여 예를 들어 데이터베이스 또는 sftp 서버를 환경에 제공할 수 있습니다.  
 이러한 Docker 이미지를 사용하면 많은 노력을 절약할 수 있으며 1분 이내에 코딩을 시작할 수 있습니다.

 Docker와 PhpStorm에서 Docker를 사용하는 방법에 대해 자세히 알아보려면 [Pascal Landau](https://www.pascallandau.com/about/) 의 [우수한 자습서 시리즈](https://www.pascallandau.com/blog/php-php-fpm-and-nginx-on-docker-in-windows-10/) 와 [PhpStorm 설명서](https://www.jetbrains.com/help/phpstorm/docker.html) 를 확인하세요.

 *JetBrains PhpStorm 팀*  
 *발전을 위한 추진력*

<div class="content__row"><div class="tag-list"> [디버그](/phpstorm/tag/debug/) [디버깅](/phpstorm/tag/debugging/) [학습](/phpstorm/tag/learn/) [뉴스레터](/phpstorm/tag/newsletter/) [Xdebug](/phpstorm/tag/xdebug/)</div>- <span>공유하다</span>
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2018%2F08%2Fquickstart-with-docker-in-phpstorm%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2018%2F08%2Fquickstart-with-docker-in-phpstorm%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2018%2F08%2Fquickstart-with-docker-in-phpstorm%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2018%2F08%2Fquickstart-with-docker-in-phpstorm%2F)

</div><div class="content__pagination"> [PhpStorm 2018.2.2 릴리스](https://blog.jetbrains.com/phpstorm/2018/08/phpstorm-2018-2-2-is-released/) [PhpStorm 2018.2.3 EAP 182.4323.23](https://blog.jetbrains.com/phpstorm/2018/08/phpstorm-2018-2-3-eap-182-4323-23/)</div></div><div class="container comments-container"><div class="content"><div id="remark42"></div></div></div>