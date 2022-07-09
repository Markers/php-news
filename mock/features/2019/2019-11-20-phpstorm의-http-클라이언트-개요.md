<div class="content">[기능](/phpstorm/category/features/) [튜토리얼](/phpstorm/category/tutorials/) [동영상](/phpstorm/category/videos/) PhpStorm의 HTTP 클라이언트 개요 
=========================

<div class="post-info">![안톤 모나코프](https://blog.jetbrains.com/wp-content/uploads/2021/03/anton-200x200.jpg)<div class="post-info__text"> [안톤 모나코프](https://blog.jetbrains.com/author/antonmonakov) <time class="publish-date" data-day="20" data-month="11" data-year="2019" datetime="2019-11-20"></time></div></div><div class="ez-toc-v2_0_17 counter-hierarchy ez-toc-transparent" id="ez-toc-container"><div class="ez-toc-title-container"> 목차

 <span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" style="display: none;"></a></span> </div><nav>- [둘러보다](#Looking_around "둘러보다")
- [권한 부여 및 변수](#Authorization_and_Variables "권한 부여 및 변수")
- [스크립팅](#Scripting "스크립팅")
- [테스트](#Testing "테스트")

</nav></div> 웹 서비스를 개발할 때 일반적으로 모든 종류의 HTTP 요청을 웹 서비스에 보내고 반환되는 내용을 검사하여 테스트합니다. PhpStorm에서는 코드 편집기에서 직접 이 작업을 수행할 수 있습니다.

 이 게시물에서는 [github.com/JetBrains/phpstorm-http-client-tutorial](https://github.com/JetBrains/phpstorm-http-client-tutorial) 예제 프로젝트를 사용하여 시연합니다. 이를 복제하고 커밋 기록을 탐색하여 이 개요의 해당 단계로 이동할 수 있습니다. 각 단계에 대해 `composer update` 를 실행하여 필요한 항목을 설치 및 업데이트한 다음 `composer start` 하기 시작합니다.

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/n8KCuKhDSZY" width="560"></iframe>

<span id="more-21398"></span>

### <span class="ez-toc-section" id="Looking_around"></span> 둘러보다<span class="ez-toc-section-end"></span>

 PhpStorm에서 HTTP 요청은 `.rest` `.http` 를 가진 일반 파일에 저장됩니다. 하나를 만들었으면 내부에 URL을 입력합니다. GET과 같은 간단한 요청의 경우 이것으로 충분하므로 *Alt+Enter* 를 누르고 *실행* 을 선택하여 요청을 즉시 실행할 수 있습니다. 요청이 실행되고 *실행* 도구 창에 응답이 표시됩니다.

![create_run_request](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-create_run_request.png)

 `.http` 파일은 필요한 만큼의 요청을 보유할 수 있습니다. `###` 을 입력하여 구분할 수 있습니다. 요청을 실행하면 PhpStorm에서 이 구분 기호를 자동으로 추가하여 매번 입력해야 하는 번거로움을 덜어줍니다. 이뿐만 아니라 라이브 템플릿을 사용하여 타이핑을 줄이고 속도를 조금 높일 수 있습니다. 사용 가능한 모든 템플릿을 보려면 *Cmd+J* (Windows의 경우 *Ctrl+J* )를 누릅니다. 예를 들어 GET 요청 골격으로 확장되는 "gtr"을 사용하겠습니다.

![create_run_gtr_request](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-create_run_gtr_request.png)

 요청을 실행하는 즉시 PhpStorm은 이에 대한 임시 실행 구성을 자동으로 생성합니다. 이제 PHP 코드에서 무언가를 변경하는 경우 컨텍스트를 전환하지 않고 *Ctrl+R* (Windows의 경우 *Shift+F10* )을 눌러 이 구성을 다시 실행하고 변경 사항을 즉시 테스트할 수 있습니다.

![http_request_run_config](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-http_request_run_config.png)

 때로는 임시 테스트를 수행하고 싶을 수도 있습니다. 특정 메서드를 실행하고 요청 간에 반환되는 내용을 비교합니다. 이를 위해 스크래치를 사용할 수 있습니다. 그것들은 일반 실제 파일처럼 작동하지만 프로젝트 내부에 저장하기 위한 것이 아닙니다.

 시작하려면 새 `.http` 스크래치 파일을 만들고 내부에서 요청을 작성하세요. 실행하면 수신된 응답에 대한 정보가 요청 바로 아래에 있는 동일한 파일에 추가됩니다. 다음 응답에 대한 링크를 얻으려면 다시 실행하십시오. 이제 편집기 여백에 있는 버튼을 클릭하고 차이 뷰어를 통해 받은 응답을 즉석에서 비교할 수 있습니다.

![비교_스크래치](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-compare_scratches.png)

 스크래치 파일은 필요하지 않은 즉시 폐기하도록 되어 있지만 특정 요청이 마음에 들면 어떻게 하시겠습니까? 그런 다음 프로젝트와 함께 유지할 수 있습니다. *Refactor |* 파일을 *이동* 하고 일반 `.http` 파일로 이동합니다. 다른 프로젝트 파일과 마찬가지로 이제 이를 VCS에 커밋하고 팀과 공유하고 Web API를 테스트하거나 문서화하기 위한 참조로 사용할 수 있습니다.

 요약하자면, 편집기의 오른쪽 상단 모서리에 있는 *Open Log* 링크를 클릭하십시오. 여기에서 최근에 실행된 50개의 요청을 보거나 요청을 다시 실행하거나 편집기에서 응답 파일을 열 수 있습니다.

![requests_history_upd](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-requests_history_upd.png)

### <span class="ez-toc-section" id="Authorization_and_Variables"></span> 권한 부여 및 변수<span class="ez-toc-section-end"></span>

 웹 서비스에 권한 부여가 필요한 경우 HTTP 요청에 *Authorization* 헤더, 인증 방법 및 필수 자격 증명을 제공하여 웹 서비스에 액세스할 수 있습니다. 그러나 이렇게 하면 자격 증명이 요청의 일부가 되고 이를 공유하는 것은 좋은 생각이 아닐 수 있습니다.

![request_with_credentials](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-request_with_credentials.png)

 여기에서 환경 변수가 도움이 됩니다. 원하는 값을 변수로 교체한 다음 요청이 실행되자마자 제자리에 배치할 수 있습니다. 요청 내에서 변수는 `{{MyVariable}}` 과 같이 이중 중괄호로 묶여 제공됩니다.

 다른 서버를 대상으로 할 가능성을 가지려면 먼저 호스트를 `{{HOST}}` 로 교체해 보겠습니다. 그런 다음 사용자 및 비밀번호 값을 `{{USER}}` 및 `{{PASSWORD}}` 로 바꿉니다. 이런 식으로 우리는 이 값을 변수로 바꿨습니다.

![request_with_variables](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-request_with_variables.png)

 이러한 변수를 정의하려면 새 파일을 만들고 이름을 `http-client.env.json` 지정해야 합니다. 파일 내에서 특정 서버를 나타내는 환경과 해당 서버에 대한 변수 집합을 정의합니다.

![env_json](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-env_json.png)

 `http-client.env.json` 파일도 프로젝트와 공유되므로 한 단계 더 나아가 사용자 이름과 비밀번호를 분리할 수 있습니다. 다른 파일을 만들고 이름을 `http-client.private.env.json` 지정해 보겠습니다. 여기서 *Private* 이 핵심입니다. 이 파일은 민감한 데이터를 보관하기 위한 것이며 기본적으로 VCS에서도 무시됩니다. 파일 내에서 환경을 복제한 다음 사용자 이름과 암호를 제공합니다.

![private_env_json](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-private_env_json.png)

 요청을 실행할 때 PhpStorm은 변수를 실제 값으로 대체합니다. 또한 팀원이 동일한 요청을 재사용할 수 있지만 환경에 맞게 조정할 수 있습니다.

### <span class="ez-toc-section" id="Scripting"></span> 스크립팅<span class="ez-toc-section-end"></span>

 HTTP 클라이언트에서 웹 서비스가 반환한 내용을 확인하고 프로그래밍 방식으로 이에 대응할 수 있습니다.

 이 예를 생각해 보겠습니다. 첫 번째 요청을 실행할 때 웹 서비스가 JSON 응답을 반환합니다. 그런 다음 수정하는 간단한 스크립트를 작성하여 두 번째 POST 요청을 사용하여 수정된 데이터를 서버로 다시 보낼 수 있습니다.

![get_post_requests](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-get_post_requests.png)

 응답 핸들러 스크립트는 `> {% %}` 로 묶이고 JavaScript로 작성되며 응답이 수신되는 즉시 실행됩니다.

 첫 번째 스크립트에서 수신된 응답에 대한 정보가 포함된 `response` 개체를 참조한 다음 응답 본문 JSON을 가져와서 *New features* 키 값을 수정합니다. 다음으로 PhpStorm을 다시 시작할 때까지 세션 메타데이터를 저장하고 수정된 응답 본문을 새 `myResponse` 전역 환경 변수에 저장하는 `client` 개체를 참조합니다.

```
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-title="">
> {%
  response.body["안정된 릴리스"] = "2019.3";
  client.global.set("myResponse", JSON.stringify(response.body));
%}
```

요청을 다시 실행하면 응답이 수정되고 저장됩니다. JSON 데이터를 서버로 보내는 두 번째 POST 요청에서 이제 `myResponse` 변수를 요청 본문으로 설정하고 이를 실행하여 서버에 데이터를 저장할 수 있습니다.

![get_post_requests_variable](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-get_post_requests_variable.png)

 이제 첫 번째 GET 요청을 다시 실행할 수 있으며 수정된 데이터를 반환하는지 확인할 수 있습니다.

### <span class="ez-toc-section" id="Testing"></span> 테스트<span class="ez-toc-section-end"></span>

 이번에는 꽤 잘 작동했지만 모든 종류의 응답 값, 조건 또는 논리가 첨부된 스크립트가 더 많다고 상상해 보십시오. 각 스크립트를 수동으로 확인하는 것은 결국 부담이 됩니다. PhpStorm이 우리를 위해 그것을 하도록 합시다.

 실제 테스트를 포함하도록 스크립트를 개선하겠습니다. 여기서는 테스트 이름을 제공한 다음 테스트를 실행하는 함수를 제공하는 *테스트* 메서드를 사용합니다. 함수 내에서 응답 본문 JSON 키의 값을 확인하고 조건이 충족되지 않으면 오류 메시지를 출력하는 `assert` 메서드를 사용합니다. 물론 한 번만 확인할 수 있는 것은 아닙니다. 응답 상태를 확인하는 조건도 추가했습니다.

```
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-title="">
> {%
  client.test("버전", function() {
  client.assert(response.body["안정 릴리스"] === "2019.3", "최신 버전에 대한 정보를 반환하지 않았습니다.
풀어 주다");
});

  client.test("상태", function() {
    client.assert(response.status === 200, "응답 상태가 200이 아닙니다.");
  });
%}
```

이제 요청을 실행하면 PhpStorm이 전용 *테스트* 탭에서 테스트 결과를 제공합니다. 문제가 발생하면 테스트는 실패하지만 무엇이 잘못되었는지 정확히 알고 즉시 고칠 수 있습니다.

![테스트 탭](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-tests_tab.png)

 이 게시물이 HTTP 클라이언트로 가능한 것에 대해 약간의 빛을 제공하기를 바랍니다. 자세한 내용 [은 HTTP 클라이언트 문서](https://www.jetbrains.com/help/phpstorm/http-client-in-product-code-editor.html) 를 참조하고 수시로 PhpStorm 블로그를 확인하여 최신 기능을 확인하세요.

<div class="content__row"><div class="tag-list"> [API](/phpstorm/tag/api/) [HTTP 클라이언트](/phpstorm/tag/http-client/) [뉴스레터](/phpstorm/tag/newsletter/) [Rest 클라이언트](/phpstorm/tag/rest-client/) [튜토리얼](/phpstorm/tag/tutorial/) [동영상](/phpstorm/tag/video/)</div>- <span>공유하다</span>
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2019%2F11%2Fhttp-client-in-phpstorm-overview%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2019%2F11%2Fhttp-client-in-phpstorm-overview%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2019%2F11%2Fhttp-client-in-phpstorm-overview%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2019%2F11%2Fhttp-client-in-phpstorm-overview%2F)

</div><div class="content__pagination"> [PhpStorm 2019.3 베타](https://blog.jetbrains.com/phpstorm/2019/11/phpstorm-2019-3-beta/) [PhpStorm 2019.3 RC](https://blog.jetbrains.com/phpstorm/2019/11/phpstorm-2019-3-rc/)</div></div><div class="container comments-container"><div class="content"><div id="remark42"></div></div></div>