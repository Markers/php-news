<div class="content">[얼리 액세스 프로그램](/phpstorm/category/eap/) PhpStorm 2022.2 EAP #5: 반환 명령문의 @var, 향상된 HTTP 클라이언트, Docker 업데이트 
===================================================================

<div class="post-info">![브렌트 루즈](https://secure.gravatar.com/avatar/cef66d348f7def8f4634963a7e7a05e4?s=200&r=g)<div class="post-info__text"> [브렌트 루즈](https://blog.jetbrains.com/author/brent-roose-jetbrains-com) <time class="publish-date" data-day="23" data-month="06" data-year="2022" datetime="2022-06-23"></time></div></div><div class="ez-toc-v2_0_17 counter-hierarchy ez-toc-transparent" id="ez-toc-container"><div class="ez-toc-title-container"> 목차

 <span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" style="display: none;"></a></span> </div><nav>- [return 문에서 익명 @var](#Anonymous_var_in_return_statements "return 문에서 익명 @var")
- [시편 및 PHPStan 플러그인 활성화 제안](#Suggestion_to_enable_Psalm_and_PHPStan_plugins "시편 및 PHPStan 플러그인 활성화 제안")
- [콜러블에 대한 스프레드 매개변수](#Spread_parameters_for_callables "콜러블에 대한 스프레드 매개변수")
- [HTTP 클라이언트에서 WebSockets 엔드포인트 지원](#Support_for_WebSockets_endpoints_in_the_HTTP_client "HTTP 클라이언트에서 WebSockets 엔드포인트 지원")
- [HTTP 클라이언트에서 GraphQL 끝점 지원](#Support_for_GraphQL_endpoints_in_the_HTTP_client "HTTP 클라이언트에서 GraphQL 끝점 지원")
- [HTTP 클라이언트에 대한 UI/UX 개선](#UIUX_improvements_for_the_HTTP_client "HTTP 클라이언트에 대한 UI/UX 개선")
- [IDE 재시작 시 Docker 자동 연결](#Docker_auto-connection_on_IDE_restart "IDE 재시작 시 Docker 자동 연결")
- [추가 Docker 데몬에 대한 Docker 연결 옵션](#Docker_connection_options_for_additional_Docker_daemons "추가 Docker 데몬에 대한 Docker 연결 옵션")

</nav></div> 2022.2 EAP 시리즈에 오신 것을 환영합니다! 사전 체험판 프로그램에 대해 잘 모르는 경우[이 블로그 게시물 을 읽어보십시오](https://blog.jetbrains.com/phpstorm/2022/05/phpstorm-2022-2-early-access-program-is-open/) . 이번 주 EAP 빌드의 새로운 기능을 살펴보겠습니다.

 [PhpStorm 2022.2 EAP 다운로드](https://www.jetbrains.com/phpstorm/nextversion)

<span class="ez-toc-section" id="Anonymous_var_in_return_statements"></span> return 문에서 익명 `@var`<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------

 이제 임시 변수를 도입하지 않고도 함수의 구체적인 반환 값을 지정하기 위해 return 문 앞에 `@var` docblock을 추가할 수 있습니다.

<figure class="wp-block-image size-large">![](https://resources.jetbrains.com/storage/products/blog/wp-content/uploads/phpstorm/2022.2-eap-5-inline-var.gif)</figure> 이 기능은 기본 코드가 충분히 명확한 반환 유형을 지정하지 않을 때 일부 반환 값을 유효하지 않은 것으로 표시할 수 있는 정적 분석 도구에 의존할 때 특히 유용합니다.

<span class="ez-toc-section" id="Suggestion_to_enable_Psalm_and_PHPStan_plugins"></span> 시편 및 PHPStan 플러그인 활성화 제안<span class="ez-toc-section-end"></span>
---------------------------------------------------------------------------------------------------------------------------------------------------------

 PhpStorm은 프로젝트에서 Spec 또는 PHPStan 주석을 사용하고 있는지 여부를 자동으로 감지하고 비활성화된 경우 관련 Spec 또는 PHPStan 플러그인을 활성화하도록 제안합니다.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-psalm-usage-1.png)</figure><span class="ez-toc-section" id="Spread_parameters_for_callables"></span> 콜러블에 대한 스프레드 매개변수<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------

 이제 호출 가능한 docblock 유형에서 스프레드 연산자로 매개변수를 정의할 수 있습니다. PhpStorm은 해당 정의에서 유형을 올바르게 강조 표시하고 유추합니다.

<figure class="wp-block-image size-large">![](https://resources.jetbrains.com/storage/products/blog/wp-content/uploads/phpstorm/2022.2-eap-5-variadic-closure.gif)</figure><span class="ez-toc-section" id="Support_for_WebSockets_endpoints_in_the_HTTP_client"></span> HTTP 클라이언트에서 WebSockets 엔드포인트 지원<span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 이제 HTTP 클라이언트가 웹 소켓을 지원합니다.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-http-websocket-in-http-file.png)</figure><figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-http-websocket-in-http-file-running.png)</figure><span class="ez-toc-section" id="Support_for_GraphQL_endpoints_in_the_HTTP_client"></span> HTTP 클라이언트에서 GraphQL 끝점 지원<span class="ez-toc-section-end"></span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

 또한 HTTP 클라이언트에서 GraphQL 요청에 대한 지원을 추가했습니다. PhpStorm은 이제 기본적으로 HTTP 및 WebSockets 프로토콜을 통해 GraphQL 쿼리를 보낼 수 있습니다. `http://` 및 `https://` 의 경우 간단한 HTTP 요청이 사용되는 반면 `ws://` 및 `wss://` 는 WebSocket 실행기에 위임됩니다.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-http-graphql.gif)</figure><span class="ez-toc-section" id="UIUX_improvements_for_the_HTTP_client"></span> HTTP 클라이언트에 대한 UI/UX 개선<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------------

 HTTP 클라이언트에 몇 가지 UI/UX 개선 사항을 도입했습니다. 먼저 거터의 아이콘을 사용하여 실행 환경을 선택하는 편리한 방법을 도입했습니다. 이 기능을 활성화하려면 다음으로 *실행* 콤보 상자에서 실행 *전 환경 선택* 옵션을 선택하십시오.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-http-client-environment.gif)</figure> 둘째, 다운로드 프로세스를 추적할 수 있는 진행률 표시줄을 추가하여 *응답* 보기를 개선했습니다.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-http-progress-bar.gif)</figure>### ![]()

<span class="ez-toc-section" id="Docker_auto-connection_on_IDE_restart"></span> IDE 재시작 시 Docker 자동 연결<span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------------------------------------------------------------

 이제 IDE를 다시 시작하면 PhpStorm이 Docker에 자동으로 연결됩니다. 이 새 설정은 기본적으로 **설정/기본 설정 | 고급 설정 | 도커** .

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/06/eap-5-docker-autoconnect.png)</figure><span class="ez-toc-section" id="Docker_connection_options_for_additional_Docker_daemons"></span> 추가 Docker 데몬에 대한 Docker 연결 옵션<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 PhpStorm은 이제 Colima 및 Rancher와 통합되어 Docker 데몬에 대한 연결을 설정하기 위한 더 많은 옵션을 지원합니다.

 —

 이 빌드의 전체 변경 사항 목록은 [릴리스 정보](https://youtrack.jetbrains.com/articles/WI-A-231735995/PhpStorm-20222-EAP-5-222315310-build-Release-Notes) 에서 확인할 수 있습니다.

- PhpStorm EAP 빌드는 완전히 테스트되지 않았으며 불안정할 수 있습니다.
- EAP 빌드를 안정적인 PhpStorm 버전과 나란히 설치하여 최신 기능을 사용해 볼 수 있습니다.
- EAP 빌드는 무료로 사용할 수 있지만 빌드 날짜로부터 30일 후에 만료됩니다.

 문제가 발생하면 [문제 추적기](https://youtrack.jetbrains.com/issues/WI) 에 티켓을 게시하거나 이 게시물에 댓글을 달아 신고해 주세요.

 [PhpStorm 2022.2 EAP 다운로드](https://www.jetbrains.com/phpstorm/nextversion)

 PhpStorm 팀

 발전을 위한 추진력

<div class="content__row"><div class="tag-list"> [2022.2](/phpstorm/tag/2022-2/) [2022.2 EAP](/phpstorm/tag/2022-2-eap/)</div>- <span>공유하다</span>
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2022%2F06%2Fphpstorm-2022-2-eap-5%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2022%2F06%2Fphpstorm-2022-2-eap-5%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2022%2F06%2Fphpstorm-2022-2-eap-5%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2022%2F06%2Fphpstorm-2022-2-eap-5%2F)

</div><div class="content__pagination"> [PhpStorm 2022.1.3 출시](https://blog.jetbrains.com/phpstorm/2022/06/phpstorm-2022-1-3-is-released/)</div></div><div class="container comments-container"><div class="content"><div id="remark42"></div></div></div>